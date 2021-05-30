const db = require("../database/models")

let homeController = {
    index: (req, res) => {
        res.render('index')
    },
    register: (req, res) => {
        res.render('register')
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
            descripcion: req.body.descripcion
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
    }
}



module.exports= homeController;