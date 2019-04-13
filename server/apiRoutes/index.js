const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/thingA', require('./thingA'));

// 404 other api requests
router.use((req, res, next) => {
	const err = new Error('WE GOT A 404 OVER HERE!');
	err.status = 404;
	next(err);
});

module.exports = router;
