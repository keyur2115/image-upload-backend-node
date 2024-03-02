const students = require('../model/student.model.js');

exports.addStudent = async (req, res) => {
	try {
		req.body = JSON.parse(req.body.formObjData);
		if(req['file']){
			req.body.image = req.file.filename;
		}

		const resp = await students.create(req.body);
			if(resp){
				res.json({
					data:resp,
					message:"Student data added successfully",
					status: true
				})
			} else {
				res.json({
					message: "student data creation unsuccessful"
				})
			}
	
	}

	catch(err){
		console.log('Add student data error', err.message);
	}
}


exports.getStudent = async (req, res) => {
	try {
		const resp = await students.find();
			if(resp){
				res.json({
					data: resp,
					message: "Fetch student data successfully",
					status: true
				})
			} else{
				res.json({
					message: " Student data fetching unsuccessful",
					status: false
				})
			}
	
	}

	catch(err){
		console.log('Get Student data api error', err.message);
	}
}

exports.getStudentById = async(req, res) => {
	try {
		const resp = await students.findById({_id:req.params.id});

		if(resp){
			res.json({
				data: resp,
				message: "Fetch Student by Id successfully",
				status: true
			})
		} else {
			res.json({
				message: "Fetch Student by Id unsuccessful",
				status: false
			})
		}
	}

	catch(err){
		console.log("Get student by Id api error", err.message);
	}
}

exports.removeStudent = async (req, res) => {
	
	try {
		const resp = await students.deleteOne({_id: req.params.id});
			if(resp){
				res.json({
					data:resp,
					message: "Student deleted successfully",
					status: true
				})
				
			} else{
				res.json({
					message: "Student deletion unsuccessful",
					status: false
				})
			}
	
	}

	catch(err){
		console.log("Delete student api error", err.message);
	}
}

exports.updateStudent = async (req, res) => {
	try {
		req.body = JSON.parse(req.body.formObjData);
		if(req['file']){
			req.body.image = req.file.filename;
		}
		const resp = await students.findByIdAndUpdate({_id: req.params.id,}, req.body);
			if(resp){
				res.json({
					data: resp,
					message: "Student updated successfully",
					status: true
				})
			} else {
				res.json({
					message: "Student update unsuccessful",
					status: false
				})
			}
	}

	catch(err){
		console.log("Update Student api error", err.message);
	}
}

exports.multiImage = async (req, res) => {
	console.log("req files", req.files);
	try {
		if(req.files && req.files[0].filename){
			console.log("dddd");
            res.json({
				image: req.files[0],
				message: "Multi image added successfully",
				status: true
			});
		} else{
			res.json({
				message: "Multi image adding unsuccessful",
				status: false
		    })
		}
	}

	catch(err){
		console.log("multi image api error", err.message);
	}
}