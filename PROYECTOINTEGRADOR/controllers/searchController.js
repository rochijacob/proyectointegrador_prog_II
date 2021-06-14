const db = require('../database/models');
const Op = db.Sequelize.Op;

//va a controlar los productos

module.exports = {
    search: (req, res) => {
        const filtro = {
            where: {
                nombre_producto: {[Op.like]: '%' + req.query.filtro + '%'} // req.query.filtro capta el name de mi formulario de search y me trae los resultados que se asemejan a lo escrito
            },
        };
        const usuario = {
            include: [
                {association: 'usuario'}
            ]
        }
        console.log(filtro)
        console.log(usuario)

        db.Productos.findAll(usuario, filtro).then(resultado => {
            console.log(resultado)
            res.render('searchResults', {
                lista: resultado
            });
        });
    },
}