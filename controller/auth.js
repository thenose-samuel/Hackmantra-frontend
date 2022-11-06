const User = require('../models/user');


const registerUser = async (request, response) => {
    try{
        let user = [];
        user = await User.find({ username: `${request.body.username}`});
        console.log(user);
        if(user[0]?.username !== undefined){
            response.status(500).json({
                "status": "user already exists"
            });
        } else {
            const user = await User.create(request.body);
            response.status(200).json({
                "status": "success",
                "data": user,
            });
        }

    } catch (e) {
        console.log(e);
        response.status(500).json({
            "status": "Error",
        })
    }

}

const loginUser = async (request, response) => {
    try {
        let user = [];
        user = await User.find({name: request.body.username});
        if(user[0]?.name !== undefined){
            if(user[0].password === request.body.password){
                response.status(200).json(user);
            } else {
                response.status(400).json({"status" : "Invalid password"});
            }
        } else {
            response.status(400).json({"status": "User does not exist"});
        }

    } catch (e) {
        response.status(500).json({"status": "Internal server error"});
    }
}

module.exports = { registerUser, loginUser };