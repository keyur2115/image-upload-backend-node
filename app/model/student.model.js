const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required:false,
	},

	lastname: {
		type: String,
		required: false
	},

	studentId:{
		type:Number, 
		require: false
	}, 

	electiveSubject: {
		type: String, 
		require: false,
	},

	gender: {
		type: String,
		require: false
	},

	class: {
		type: String,
		required: false
	},

	technology: {
		type: Array, 
		require: false
	},

	goalInLife:{
		type: String,
		require: false
	},

	image:{
		type:String,
		require: false
	}, 

	multiImage: {
		type: Array,
		required:false
	}
}, {timestamp: true});

const student = mongoose.model('student', studentSchema);

module.exports = student;