const mongoose = require("mongoose");
const  User  = require("./models/User");

class Controller{

    constructor(){
        //al crearse el objeto se establece la conexion
        this.connect();
    }

    async connect(){
       try {
        //se intenta establecer una conexion con los datos de conexion
         await mongoose.connect(
                    "mongodb+srv://kikret:7x7e9l1a@cluster0-9ek42.mongodb.net/myMusicDB?retryWrites=true",
                    { useNewUrlParser: true }
                );
            //en caso de esablecer la conexion, se muestra en consola este mensaje
            console.log("Connected databases.");
        } catch (e) {
            //en caso de haber un error se muestra en consola el error
            console.error(e);
        }
    }
    //metodo para buscar todos los usuarios
    getUsers(){
        //en el modelo User se ejecuta el find sin ninguna condicion...
        User.find({}, (err, users)=>{
            //en caso de haberse presentado un error se ejecuta el error
            if(err) throw err;
            //de lo contrario se retorna un objeto con todos los resultados
            res.send( { allUsers : users } );
        })
    }
}
// se exporta elobjeto controlador crado a partir de la clase Controller
exports.controller = new Controller();