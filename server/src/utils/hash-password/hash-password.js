// importing package
import bcrypt from 'bcrypt'


// hash password
const hash_password = async function(password) {

    // hash the password 
    let salt = await bcrypt.genSalt(10)
    let hashed_password = await bcrypt.hash(password, salt)

    return hashed_password
}



// compare passwords
const compare_passwords = async function(login_password, hashed_password) {

    return await bcrypt.compare(login_password, hashed_password)

}



export {
    hash_password,
    compare_passwords
}