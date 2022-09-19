const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')



const Schema = mongoose.Schema


const userSchema = new Schema({

    // not having required, unique or error message property in the schema. Because I will handle those by writing code. 

    username: {
        type:String,
    },

    email:{
        type:String,
    },

    password: {
        type:String,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date

})



// static signup method   (have to use regular function because we are using 'this' keyword inside the function)
userSchema.statics.signup = async function(username, email, password) {

    // validation
    if(!username || !email || !password) {
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password must be 8 characters long. Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numerical value & 1 symbol.')
    }


    // checking if a user already exists with the provided username
    const usernameExists = await this.findOne({username})

    if(usernameExists) {
        throw Error('The username is already taken by someone. Please make a different username.')
    }


    // checking if a user already exists with the provided email
    const emailExists = await this.findOne({email})

    if(emailExists) {
        throw Error('Email already in use.')
    }


    // hashing password with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    // creating user
    const user = await this.create({username, email, password:hashedPassword})

    return user
}




// static login method
userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled')
    }


    // if any user exists with the provided email, we will get the user info
    const userInfo = await this.findOne({email})

    // if no user exists with the provided email
    if(!userInfo) { 
        throw Error('No user exists with that email')
    }

    // if a user exists with the provided email, then we will check the provided password is matching with the email associated password or not.
    const matchingPassword = await bcrypt.compare(password, user.password)

    if(!matchingPassword) {
        throw Error('Incorrect password.')
    }



    // if everything is fine, we will return the user info
    return userInfo
}



// exporting model
module.exports = mongoose.model('UserModel', userSchema)


            