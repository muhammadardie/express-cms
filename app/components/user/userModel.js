import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for user
 */

const UserScheme = new Schema({
    username: {
        type: String,
        index: { unique: true },
        required: "What is the user's username?"
    },
    email: {
        type: String,
        lowercase: true,
        required: "What is email user?"
    },
    password: {
        type: String,
        required: "What is password user?"
    }
});

const bcrypt = require('bcryptjs'),
      SALT_WORK_FACTOR   = 10;

UserScheme.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

UserScheme.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


export default mongoose.model('User', UserScheme);