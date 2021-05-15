let db = require('../database/models');
let Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        db.Productos.findByPk(req.params.id).then(resultado => {
            res.render('product', {
                lista: resultado
            });
        });
    },
}