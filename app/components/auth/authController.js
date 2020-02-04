import user from '../user/userModel.js';

exports.login = (req, res) => {
   let email    = req.body.email,
   	   password = req.body.password;

   if (email && password) {
      user.findOne({
         email: email
       }, (err, thisUser) => {
    	if (err) throw err;
   
      	if (!thisUser) {
        	res.json({status: false, msg: 'Authentication failed. User not found.'});
      	} else {
        	// check if password matches
        	thisUser.comparePassword(password,  (err, isMatch) => {
	          	if (isMatch && !err) {
	            	// if user is found and password is right create a token
	            	// let token = jwt.sign(thisUser.toJSON(), config.secret,{ expiresIn: '30m' });
	            	// return the information including token as JSON
	            	res.json({status: true, user: thisUser.toJSON()});
	          	} else {
	            	res.json({status: false, msg: 'Authentication failed. Wrong password.'});
	          	}
        	});
      	}
      });
   } else { 
   	 res.json({status: false, msg: 'Invalid Username or email'});
   }
}