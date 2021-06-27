const db = require('../database/models'); //lo nescesito para acceder y modificar mi base de datos
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;


// const bcrypt = require('bcryptjs');

module.exports = {
    
    headerPartial: (req, res) => { // Se va a tener q unificar TODO en un partial que renderize??
        // Le estamos diciendo al controlador si el usuario ya existe, si existe, saludarlo c nombre
        if (req.session.usuario){
            res.render('index', {usuario: req.session.usuario});
        } else {
            res.render('index', {usuario: "anonimo"});
        }
    },
    registerForm: (req, res) => {
        if(!req.session.usuario){
            let error = null;
        console.log("error is" + error)
        res.render('register', {error: error});
        }else{
            res.redirect('/profile/' + req.session.userId)
        }
       
    },

    registerCreateUser: (req, res) => {

        // Encriptamos la contraseña antes de mandar a la base de datos
        if (req.body.nombre == null || req.body.nombre == "",  req.body.usuario  == null || req.body.usuario == "", req.body.email  == null || req.body.email == "", req.body.pass  == null || req.body.pass == "", req.body.fechanacimiento  == null || req.body.fechanacimiento == "" ){
            let error = "Por favor llenar todos los campos"
            console.log(error)
            res.render("register", {error:error})
        } else {
            if(req.body.pass.length < 3) {
                let error = "Debe tener mas de 3 caracteres"
                res.render("register", {error:error});
            } else {
            let passEncriptada = bcrypt.hashSync(req.body.pass); //pass tiene que coincidir con el formulario

            db.Usuarios.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function(usuarios) {
                if(usuarios)  {
                    let error = "Este mail ya esta en uso"
                    console.log(error)
                    res.render("register", {error:error})
                } else {
                    db.Usuarios.findOne({where:{usuario: req.body.usuario}}).then(function(usuarios) {
                        if (usuarios) {
                            let error = "Este usuario ya existe"
                            console.log(error)
                            res.render("register", {error:error})
                        } else {
                            let createUser = {
                                nombre_apellido: req.body.nombre, //nombre se refiere al campo name de mi formulario
                                usuario: req.body.usuario,
                                email: req.body.email,
                                fecha_nacimiento: req.body.fechanacimiento,
                                pass: passEncriptada
                            }
                            console.log(createUser)
                            
                        db.Usuarios.create(createUser).then(usuario => {
                            req.session.usuario = {
                                nombre: usuario.nombre_apellido, 
                                usuario: usuario.usuario,
                                email: usuario.email
                            }
                
                            req.session.userId = usuario.id;
                            res.redirect('../profile/' + usuario.id);
                        }).catch(err => {
                            console.log(err);
                        })
                        }
                    })
                }
            })
            }
        }
    },
    loginForm: (req, res) => {
        if(!req.session.usuario){
            let error = null;
            res.render('login', {error: error});
        }else {
        res.redirect('/profile/' + req.session.userId)
        }
    },

    loginValidate: (req, res) => {
        // Filtramos el usuario a traves de un campo que sea UNICO en la base de datos
        const filtro = {
            where: { //objeto literal
                usuario: req.body.name
            }
        }
        // Buscamos el usuario que deberia ser unico
        db.Usuarios.findOne(filtro).then(usuario => {
            // Comparamos la contraseña ingresada en el login (req.body.pass)
            // con la que ingresada en el registro (usuario.pass)

            if(usuario == null){
                let error = "Ups! tus datos no coinciden con nuestra base de datos usuario"
                res.render('login', {error:error})
            } else if (bcrypt.compareSync(req.body.pass, usuario.pass) == false){
                let error = "Ups! tus datos no coinciden con nuestra base de datos contraseña"
                res.render('login', {error:error})
            } else {
                req.session.usuario = {
                    nombre: usuario.nombre_apellido, 
                    usuario: usuario.usuario,
                    id: usuario.id
                }
                req.session.userId = usuario.id;
                
                //guardo lo que nescesito en la sesion
               
                // En caso de que haya seleccionado recodarme, guardamos una cookie (check)
                if(req.body.remember){
                    res.cookie('userId', usuario.id, { maxAge: 1000 * 60 * 5 }); //guarda la cookie, que se define del lado del cliente, en este caso mi objeto seria 'userId' (el nombre de la cookie)
                }
                res.redirect('../profile/' + usuario.id);
            }
    }).catch(err =>{
        console.log(err)
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