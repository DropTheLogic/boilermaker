const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api', require('./apiRoutes'));

// Main entrypoint
app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 500 catches
app.use((err, req, res, next) => {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal Server Error!');
});


/**************
 * Start server
 **************/
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`

	Listening on port ${port}

	http://localhost:${port}/

`);
});
