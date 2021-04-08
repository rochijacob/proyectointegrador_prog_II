let controllerLogin = {
    index: (req, res) => {
        res.render('login', {title: 'Mercado Liebre'})
    },
    register: (req, res) => {
        res.render('register')
    }

}



module.exports= controllerLogin;