const db = require('../database/models');
const Op = db.Sequelize.Op;

//va a controlar los productos

module.exports = {
    search: (req, res) => {
        const filtro = {
            where: {
                nombre_producto: {[Op.like]: '%' + req.query.filtro + '%'} // req.query.filtro capta el name de mi formulario de search y me trae los resultados que se asemejan a lo escrito
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