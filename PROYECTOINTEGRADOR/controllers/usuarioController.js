const db = require('../database/models'); //lo nescesito para acceder y modificar mi base de datos
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        const filtro = { //los campos que quiero que traiga
            include: [
                {association: 'producto'},
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
        db.Usuarios.findByPk(req.params.id).then(resultado => {
            res.render('profileEdit', {
                lista: resultado
            });
        });
    },
}