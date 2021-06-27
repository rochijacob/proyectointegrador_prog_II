const db = require('../database/models');
const Op = db.Sequelize.Op;

//va a controlar los productos

module.exports = {
    search: (req, res) => {
        const filtro = {
            where: {
                [Op.or]: [
                    {
                        nombre_producto: {[Op.like]: '%' + req.query.search + '%'} // req.query.filtro capta el name de mi formulario de search y me trae los resultados que se asemejan a lo escrito
                    },
                    {
                        descripcion: {[Op.like]: '%' + req.query.search + '%'}
                    }
                ]
            },
            include: [
                {association: 'usuario'},
                {association: 'comentarios'}
            ]
        };
        console.log(filtro)

        db.Productos.findAll(filtro).then(resultado => {
            res.render('searchResults', {
                lista: resultado
            });
        });
    },
}

