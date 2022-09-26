const crypto = require('crypto')

const mongoose = require('mongoose')

const validator = require('validator')

const bcrypt = require('bcrypt')



const Schema = mongoose.Schema


const userSchema = new Schema({


    username: {
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },

    photo: String, 

    password: {
        type:String,
        required: true,
        select:false,
        validate: [validator.isStrongPassword, 'Password must be 8 characters long. Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numerical value & 1 symbol.']
    },

    passwordConfirm: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    passwordChangedAt: Date

})



// hash password
userSchema.pre('save', async function(next){


    // Only run this function if password was actually modified
    if(!this.isModified('password')) return next()

    // Hash the password 
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    // Delete passwordConfirm field (we don't need to save this property to the database.)
    this.passwordConfirm = undefined

    next()
})




// compare password 
userSchema.methods.comparePassword = async function(loginPassword, hashedPassword) {

    return await bcrypt.compare(loginPassword, hashedPassword)

}


// password is changed or not after the token is issued 

userSchema.methods.passwordIsChangedAfterTheTokenIsIssued = function(JwtIssuedTime) {

    if(this.passwordChangedAt) {

        const passwordChangedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000)

        console.log(passwordChangedTimeStamp, JwtIssuedTime)

        // the following logic will return true and exist the password if the user has changed the password after JWT is issued
        return JwtIssuedTime < passwordChangedTimeStamp
    }


    // false means not changed
    return false

}







// exporting model
module.exports = mongoose.model('UserModel', userSchema)


            