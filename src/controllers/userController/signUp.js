const jwt = require('jsonwebtoken')
const User = require('../../model/user')
exports.signUp = async (req, res) => {

const { userName, firstName, lastName, password,  email, mobile } = req.body
 try {
    const User = await User.create({

        userName, 
        firstName,
        lastName,
        password, 
        email,
        mobile,
    }) 
    const token = jwt.sign({User_id}, process.evn.JWT_SECRET, { 
        expiresIn: process.env.JWT_EXPIRES
    });
    return res.status(201).json({
        status: 'success',
        token,
        data: {
            user: User
        }
    });    
} catch (error) {
    return res.status(500).json('internal server error')   
  };   
};
