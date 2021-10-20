const jwt = require('jsonwebtoken')
const { User } = require('../../model')


exports.signUp = async (req, res) => {

const { userName, firstName, lastName, password,  email, mobile } = req.body;
 try {
    const user = await User.create({

        userName, 
        firstName,
        lastName,
        password, 
        email,
        mobile,
    });
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { 
        expiresIn: process.env.JWT_EXPIRES
    });
    return res.status(201).json({
        status: 'success',
        token,
        data: {
            User: user
        }
    });    
} catch (error) {
    return res.status(500).json('internal server error')   
  };   
};
