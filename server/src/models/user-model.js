// importing libraries
import mongoose from 'mongoose'
import validator from 'validator'
import { hash_password } from '../utils/hash-password/hash-password.js';


/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           required: true
 *         email:
 *           type: string
 *           required: true
 *           unique: true
 *           lowercase: true
 *           format: email
 *         is_email_confirmed:
 *           type: boolean
 *           required: true
 *           default: false
 *         password:
 *           type: string
 *           select: false
 *         password_confirm:
 *           type: string
 *           required: true
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           default: user
 */

const user_schema = mongoose.Schema({



    full_name: {

        type: String,
        required: true,
    },


    username: {
        type: String,
        required: true,
        unique: true,
        // match: [/^[a-zA-Z0-9_]{3,20}$/, 'Username must contain only letters, numbers, and underscores, and be between 3 and 20 characters long.']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address.']
    },

    is_email_confirmed: {
        type: Boolean,
        default: function () {
            return !!this.google_id;
        }
    },

    google_id: {
        type: String,
        required: function () {
            return !this.password;
        }
    },

    password: {
        type: String,
        select: false,
        required: function () {
            return !this.google_id;
        },
        validate: [validator.isStrongPassword, 'Password must be 8 characters long. Password must have at least 1 lowercase letter, 1 uppercase letter, 1 numerical value & 1 symbol.']
    },


    password_confirm: {
        type: String,
        required: function () {
            return !!this.password;
        },
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Passwords do not match.'
        }
    },

    picture_link: {
        type: String,
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    
    last_signed_in_unix_timestamp: {
        type:String,
        required: true
    },

    last_access_unix_timestamp: {
        type:String,
        required: true
    },


    auth_provider: {
        type: String,
        enum: ["email", "google", "facebook", "github", "twitter"],
        default: 'email',
        required: true
    }

}, { timestamps: true })




//  has the password before saving and  delete the password_confirm field before saving the new user data on database
user_schema.pre('save', async function (next) {

    // hashing the password before saving
    if (this.isModified('password')) {
        // hashing the password before saving
        this.password = await hash_password(this.password);
    }

    // delete password_confirm field 
    this.password_confirm = undefined

    next()
})




// creating the model
const user_model = mongoose.model('user_model', user_schema)


// Sync indexes in mongoDB
user_model.syncIndexes()
    .then(() => { /* Do nothing here */ })
    .catch((err) => { console.error('Error syncing indexes of user_model', err) })


// exporting the model
export default user_model









