const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDirectory = path.join(__dirname, '../../uploads', 'students');
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  	destination: uploadDirectory,  
  	filename: function (req, file, cb) {
  	const extension = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+extension)
  }
})

const upload = multer({ storage: storage })

module.exports = upload;