let db = require('../database/models');
const Producto = require('../database/models/Producto');
let Op = db.Sequelize.Op;

module.exports = {
    detalle: (req, res) => {
        const filtro = { //los campos que quiero que traiga
            include: [
                {association: 'comentarios', include: 'usuario'},
                {association: 'usuario'}
            ]
        }
        db.Productos.findByPk(req.params.id, filtro).then(resultado => {
            console.log(resultado.toJSON())
            res.render('product', {
                lista: resultado
            });
        }).catch(err => {
            console.log(err)
        });
    },

    updateRender: (req, res)=> {
        if(req.session.usuario) {
            db.Productos.findByPk(req.params.id).then(resultado => {
                res.render('productModify', {
                    lista: resultado
                });
            });
        } else {
            res.redirect('/profile/' + req.params.id )
        }
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
        }).then((productoId) => {
            res.redirect('/product/' + productoId);
        });
    },
    comentar: (req,res) => {
        let error = {};
        if(res.locals.usuarioId){
            db.Comentarios.create({
                texto: req.body.text,
                usuario_id: req.session.userId,
                product_id: req.body.productId 
            }).then(comentario =>{
                console.log(comentario)
                res.redirect('/product/' + req.body.productId)
            }).catch(err=>{
                console.log(err)
            })
        }else{
            error.message= 'Registrate para comentar!'            
            res.locals.error=error    
            res.redirect('/register/')
        }
    }

     


    


}