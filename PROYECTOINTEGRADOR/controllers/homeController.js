const db = require("../database/models");
const Op = db.Sequelize.Op;

let homeController = {
    index: (req, res, next) => {
        let productosNuevos = {
            order: [ 
                ['createdAt', 'DESC'],
            ],
            limit: 4, 
        }
        let productosViejos = {
            order: [
                ['createdAt', 'ASC'],
            ],
            limit: 4, 
        }

        db.Productos.findAll(productosNuevos).then(nuevos => {
            db.Productos.findAll(productosViejos).then(viejos => {
                res.render("index", {nuevos: nuevos, viejos: viejos})
            }).catch(err => {console.log(err)})
        })
    },

    login: (req, res) => {
        res.render('login')
    },
    product: (req, res) => {
        res.render('product')
    },
    profile: (req, res) => {
        res.render('profile')
    },
    headerLogueado: (req, res) => {
        res.render('headerLogueado')
    },
    searchResults: (req, res) => {
        res.render('searchResults')
    },
    // cambie el nombre, antes era search-results
    productAdd: (req, res) => {
        res.render('productAdd')
    },
    agregarProducto: (req, res) => {
        db.Productos.create({
            imagen: req.body.imagen,
            nombre_producto: req.body.nombre,
            descripcion: req.body.descripcion,
            usuario_id: req.session.userId
        }).then(productoCreado => {
            res.redirect('/product/' + productoCreado.id);
        }).catch(error =>{
            console.log(error);
        })
    },
    profileEdit: (req, res) => {
        res.render('profileEdit')
    },
    borrar: (req, res) => {
        db.Productos.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('/productAdd/');
        }).catch(error => {
            console.log(error)
        })
    },
    todosProductos: (req,res) =>{
    db.Productos.findAll().then(resultado => {
            console.log(resultado)
            res.render('todosProductos', {
                lista: resultado
            });
        });
    }
}



module.exports= homeController;