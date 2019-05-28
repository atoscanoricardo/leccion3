//requerimos las biblotecas express para las rutas, bodyParser para loenvios por post de JSON
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//llamamos el controlador que se encarga de gestionar la base de datos
const controller = require("./Controller");

//creamos la ruta raiz para enviar un mensaje de bienvenida con la version
app.get("/", (req, resp)=>{
    //retornamos un mensaje
    res.send("My Music v1")
})
//creamos la ruta users que deberá traer todos los usuarios
app.get("/users", (req, resp)=>{
    //llamamos el metodo getUser del objeto controller, este se encarga de buscar todos los usuarios
    //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
    controller.getUsers(req, resp);
})
//exportamos la constante app con toda la configuracion de las rutas
exports.app = app