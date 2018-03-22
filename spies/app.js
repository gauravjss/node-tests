var db = require('./db');

module.exports.handleSignUp = (email , password)=>{
    // Check if the email already exists

    // Save the user to the database
    db.saveUser({
        /*showing new JSON definition in email field ES6*/
        email,
        password : password
    });
    // Send the welcome email


}