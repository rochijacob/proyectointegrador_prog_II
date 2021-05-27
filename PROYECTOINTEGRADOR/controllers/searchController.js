const db = require('../database/models');
const Op = db.Sequelize.Op;

//va a controlar los productos

module.exports = {
    search: (req, res) => {
        const filtro = {
            where: {
                nombre_producto: {[Op.like]: '%' + req.query.filtro + '%'}
            }
        };
        console.log(filtro)

        db.Productos.findAll(filtro).then(resultado => {
            console.log(resultado)
            res.render('searchResults', {
                lista: resultado 
            });
        });
    },
}