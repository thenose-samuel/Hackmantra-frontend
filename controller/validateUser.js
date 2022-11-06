const userSchema = require('../models/user');

const validateUser = async (username, password) => {
    let user = userSchema.find({username: username, password: password});
    return user[0]?.username !== undefined;
}