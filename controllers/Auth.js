const bcrypt = require('bcrypt');
const User = require("../model/User");


// Sign up route handler

exports.signup = async(req,res)=> {
    try{
        // get data
        const {name , email ,password , role} = req.body;
        // check if user already exits

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            });
        }

        // secure password 
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        
    }
    catch(err) {

    }
}