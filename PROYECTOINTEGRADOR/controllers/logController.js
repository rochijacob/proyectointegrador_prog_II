const db = require('../database/models'); //lo nescesito para acceder y modificar mi base de datos
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;


// const bcrypt = require('bcryptjs');

module.exports = {
    /*
    headerPartial: (req, res) => { // Se va a tener q unificar TODO en un partial que renderize??
        // Le estamos diciendo al controlador si el usuario ya existe, si existe, saludarlo c nombre
        if (req.session.usuario){
            res.render('index', {usuario: req.session.usuario});
        } else {
            res.render('index', {usuario: "anonimo"});
        }
    },*/
    registerForm: (req, res) => {
        res.render('register');
    },

    registerCreateUser: (req, res) => {
        // Encriptamos la contraseña antes de mandar a la base de datos
        let passEncriptada = bcrypt.hashSync(req.body.password); //pass tiene que coincidir con el formulario
        
        db.Usuarios.create({
            nombre_apellido: req.body.nombre, //nombre se refiere al campo name de mi formulario
            usuario: req.body.usuario,
            email: req.body.email,
            fecha_nacimiento: req.body.fechanacimiento,
            pass: passEncriptada
        }).then(usuario => { 
            res.redirect('/profile'); //redirect tiene que ir al profile del usuario
        })
        .catch(err => {
            // print the error details
            console.log(err);
        });

    },

    loginForm: (req, res) => {
        res.render('login');
    },

    loginValidate: (req, res) => {
        // Filtramos el usuario a traves de un campo que sea UNICO en la base de datos
        const filtro = {
            where: { //objeto literal
                nombre_apellido: req.body.nombre
            }
        }

        // Buscamos el usuario que deberia ser unico
        db.Usuario.findOne(filtro).then(usuario => {
            // Comparamos la contraseña ingresada en el login (req.body.pass)
            // con la que ingresada en el registro (usuario.pass)
            if(bcrypt.compareSync(req.body.pass, usuario.pass)){ //hashSync encrpta, compareSynv desencripta y compara, true si la contra es correcta false si no
                req.session.usuario = usuario.name;
                //guardo lo que nescesito en la sesion

                // En caso de que haya seleccionado recodarme, guardamos una cookie (check)
                if(req.body.remember){
                    res.cookie('userId', usuario.id, { maxAge: 1000 * 60 * 5 }); //guarda la cookie, que se define del lado del cliente, en este caso mi objeto seria 'userId' (el nombre de la cookie)
                }
            }
            res.redirect('/'); //inicio de sesion y que diga, bienvenido ....
        });
    },

    logout: (req, res) => {
        // Borramos la sesion del servidor
        req.session.destroy();
        // Eliminamos la cookie del cliente
        res.clearCookie('userId');
        res.redirect('/');
    }

}