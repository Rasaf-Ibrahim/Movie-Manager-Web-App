const jwt = require('jsonwebtoken')

const UserModel = require('../models/userModel')


// creating jwt token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'365d'})
}






/* 
Description:  Register a user

Method: POST

Route: api/user/signup

Access: Public

*/


const signupUser = async (req, res) =>{


    const {username, email, password} = req.body


    try{
        const user = await UserModel.signup(username, email, password)

        // create a token 
        const token = createToken(user._id)

        res.status(200).json({username, email, token })
    }

    catch (error){

        res.status(400).json({error: error.message})

    }
  
}







/* 
Description:  Login a user

Method: POST

Route: api/user/login

Access: Public

*/


const loginUser = async (req, res) =>{

    const {email, password} = req.body


    try{
        const user = await UserModel.login(email, password)

        // create a token 
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }

    catch (error){

        res.status(400).json({error: error.message})

    }

}







/* 
Description:  Forgot Password

Method: POST

Route: api/user/login

Access: Public

*/


const forgotPassword = (req, res) =>{

    res.send('Forgot Password')

}






/* 
Description:  Reset Password

Method: PUT

Route: api/user/login

Access: Public

*/


const resetPassword = (req, res) =>{

    res.send('Reset Password')
    
}







module.exports = {loginUser, signupUser, forgotPassword, resetPassword}

