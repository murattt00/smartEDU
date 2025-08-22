const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');


exports.createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).redirect('/login');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(user){
            const same = await bcrypt.compare(password, user.password);
            if(same){
                req.session.userID = user._id;
                res.status(200).redirect('/');
            } else {
                res.status(401).send("Invalid credentials");
            }
        } else {
            res.status(404).send("User not found");
        }
};

exports.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};