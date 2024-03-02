module.exports = (app) => {

	const studentRoute = require('./studentRoute');
	app.use('/api/v1', studentRoute);

}