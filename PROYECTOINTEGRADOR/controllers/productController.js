let db = require('../database/models');
let Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        const filtro = { //los campos que quiero que traiga
            include: [
                {association: 'comentarios' }
            ]
        }
        db.Productos.findByPk(req.params.id, filtro).then(resultado => {
            console.log(resultado.toJSON())

            res.render('product', {
                lista: resultado
            });
        });
    },

    updateRender: (req, res)=> {
        
        db.Productos.findByPk(req.params.id).then(resultado => {
            res.render('productAdd', {
                lista: resultado
            });
        });
    },
    updateProducto: (req, res) => {
        db.Productos.update({
            imagen: req.body.imagen,
            nombre_producto: req.body.nombre,
            descripcion: req.body.descripcion
        },{
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('./product/' + lista.id);
        });
    },

    


}