const db = require('../database/models'); //lo nescesito para acceder y modificar mi base de datos
const bcrypt = require('bcryptjs');
const Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        db.Usuarios.findByPk(req.params.id).then(resultado => {
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