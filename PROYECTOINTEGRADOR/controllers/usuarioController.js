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
            console.log(resultado.toJSON())

            res.render('profile', {
                lista: resultado
            });
        });
    },
    detalleProfile: (req, res) => {
        if(req.session.userId == req.params.id){
        db.Usuarios.findByPk(req.params.id).then(resultado => {
            res.render('profileEdit', {
                lista: resultado
            });
        });
    }else{
        res.redirect('/')
    }   
    },
    profileEdit: (req, res) =>{
        db.Usuarios.update({
            nombre_apellido: req.body.nombre,
            email: req.body.email,
            usuario: req.body.usuario,
            foto_perfil: req.file
        },{
            where: {
                id: req.body.id
            }
        }).then(profileId => {
            res.redirect('/profile/' + req.body.id);
        });
    }
}