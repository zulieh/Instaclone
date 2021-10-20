const bcrypt = require('bcrypt')
const User = require('../../model')

exports.login = async (req,res) => {
   try {

    const { email, password } = req.body
     //check if userName exist and password

     if(!(email && password)) {
         res.status(400).send('All inputs is required')
     }
     //check if username and password is correct

     const user = await User.findOne({ email })
     
     if (user && (await bcrypt.compare (password, user.password))) {
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { 
            expiresIn: process.env.JWT_EXPIRES
        });
     };
     user.token = user;
     res.status(200).json(user)

     res.status(400).send('invalid details')
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('internal server error')  
    }  
     
}