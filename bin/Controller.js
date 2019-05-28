const mongoose = require("mongoose");
const  User  = require("./models/User");

class Controller{

    constructor(){
        this.connect();
    }

    async connect(){
       try {
      await mongoose.connect(
            "mongodb+srv://kikret:7x7e9l1a@cluster0-9ek42.mongodb.net/myMusicDB?retryWrites=true",
            { useNewUrlParser: true }
        );
            console.log("Connected databases.");
        } catch (e) {
            console.error(e);
        }
    }

    getUsers(){
        User.find({}, (err, users)=>{
            res.send( { allUsers : users } );
        })
    }
}

exports.controller = new Controller();

