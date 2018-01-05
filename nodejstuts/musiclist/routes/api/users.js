const express = require('express');
const router = express.Router();
//we need to require our user model
const User = require('../../models/users/user');

//get user list
router.get('/list', (req, res, next) => {
//find matching users / all
	User.find((err, users) => {
  //if broken send error
		if(err){
			res.send(err);
		}
		//else send array
		res.json(users);
	});
});

module.exports = router;