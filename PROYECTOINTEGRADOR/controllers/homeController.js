const db = require("../database/models");
const Op = db.Sequelize.Op;

let homeController = {
    index: (req, res, next) => {
        let productosNuevos = {
            order: [ 
                ['createdAt', 'DESC'],
            ],
            limit: 4, 
            include: [
                {association: 'usuario'},
                {association: 'comentarios'}
            ]
        }
        let productosViejos = {
            order: [
                ['createdAt', 'ASC'],
            ],
            limit: 4, 
            include: [
                {association: 'usuario'},
                {association: 'comentarios'}
            ]
        }
        let filtro = {
            include: [
                {association: 'usuario'},
                {association: 'comentarios'}
            ]
            
        }

        db.Productos.findAll(productosNuevos, filtro).then(nuevos => {
            db.Productos.findAll(productosViejos, filtro).then(viejos => {
                console.log(viejos);
                res.render("index", {nuevos: nuevos, viejos: viejos})
            }).catch(err => {console.log(err)})
        })
    },
    headerLogueado: (req, res) => {
        res.render('headerLogueado')
    },
    // cambie el nombre, antes era search-results
    productAdd: (req, res) => {
        if(req.session.usuario){
           res.render('productAdd') 
        } else {
            res.redirect('/register/')
        }
        
    },
    agregarProducto: (req, res) => {
        db.Productos.create({
            imagen:req.body.imagen,
            uploaded: req.file.filename,
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
            res.redirect('/');
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