const UserModel = require('../models/userModel')
const tryCatchAsync = require('../utlis/tryCatchAsync')



const getAllUsers = tryCatchAsync(async(req, res, next)=> {

    const users = await UserModel.find()

    // Send response
    res.status(200).json({
        status:'success',
        results: users.length,
        data: {
            users
        }
    })

   
})




module.exports = {getAllUsers}