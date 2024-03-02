const express = require('express');
const app = express();
const route =  express.Router();
const path = require('path');

const studentController = require('../controllers/studentController');
const upload = require('../middleware/multerConfig');
const uploadMulti = require('../middleware/multiImageConfig');

route.use('/uploads', express.static(path.join(__dirname, '../../uploads')))


route.get('/', studentController.getStudent);
route.get('/:id', studentController.getStudentById);
route.post('/add-student', upload.single('image'),  studentController.addStudent);
route.delete('/remove-student/:id', studentController.removeStudent);
route.patch('/update-student/:id', upload.single('image'), studentController.updateStudent);
route.post('/multi-image', uploadMulti, studentController.multiImage);

module.exports = route;