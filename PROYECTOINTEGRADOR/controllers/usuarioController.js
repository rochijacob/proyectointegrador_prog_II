const db = require('../database/models'); //lo nescesito para acceder y modificar mi base de datos
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        const filtro = { //los campos que quiero que traiga
            include: [
                {association: 'producto', include: 'comentarios'},
                {association: "comentarios"}
            ]
        }
        db.Usuarios.findByPk(req.params.id, filtro).then(resultado => {

            res.render('profile', {
                lista: resultado
            });
        });
    },
    detalleProfile: (req, res) => {
        if(req.session.userId == req.params.id){
        db.Usuarios.findByPk(req.params.id).then(resultado => {
            let error = null;
            res.render('profileEdit', {
                lista: resultado,
                error:error
            });
        });
    }else{
        res.redirect('/')
    }   
    },
    profileEdit: (req, res) =>{
        if(req.session.userId == req.params.id){
        db.Usuarios.findOne({where: {email:req.body.email}}).then(email => {
            if(email && req.session.usuario.email != req.body.email){
                db.Usuarios.findByPk(req.params.id).then(resultado => {
                    let error = "Este mail ya existe, no lo puedes cambiar";
                    res.render('profileEdit', {
                        lista: resultado,
                        error:error
                    });
                });
            } else {
                db.Usuarios.findOne({where: {usuario: req.body.usuario}}).then(usuario => {
                    if(usuario && req.session.usuario.usuario != req.body.usuario){
                        db.Usuarios.findByPk(req.params.id).then(resultado => {
                            let error = "Este usuario ya existe, no lo puedes cambiar";
                            res.render('profileEdit', {
                                lista: resultado,
                                error:error
                            });
                        });
                    } else {
                        if(req.file != undefined){
                            db.Usuarios.update({
                                nombre_apellido: req.body.nombre,
                                email: req.body.email,
                                usuario: req.body.usuario,
                                foto_perfil: req.file.filename
                            },{
                                where: {
                                    id: req.body.id
                                }
                            }).then(profileId => {
                                res.redirect('/profile/' + req.body.id);
                            }).catch(err => {
                                console.log(err)
                            });
                            } else {
                            db.Usuarios.update({
                                nombre_apellido: req.body.nombre,
                                email: req.body.email,
                                usuario: req.body.usuario,
                            },{
                                where: {
                                    id: req.body.id
                                }
                            }).then(profileId => {
                                res.redirect('/profile/' + req.body.id);
                            }).catch(err => {
                                console.log(err)
                            })}
                    }
                })  
            } 
        })
        } else {
            res.redirect('/')
        }
    },
    borrarPerfil: (req,res) => {


        db.Usuarios.destroy({where:{id:req.body.id}}).then(
            req.session.destroy(),
            res.clearCookie("userId"),
            res.redirect('/')).catch(err => {
                console.log(err)
            })
    }

}