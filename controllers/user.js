const User = require('../models/user')

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.json({
                error: 'User not Found'
            })
        }
        console.log(user);
        req.profile = user;
        next();
    })
}

exports.read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    res.json(req.profile)
}

exports.update = (req, res) => {
    User.findByIdAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, user) => {
        if(err) {
            return res.status(400).json({
                error: 'You are not authorized to perform this update !'
            })
        }
        user.profile.hashed_password = undefined
        user.profile.salt = undefined
        res.json(user)
    })
}