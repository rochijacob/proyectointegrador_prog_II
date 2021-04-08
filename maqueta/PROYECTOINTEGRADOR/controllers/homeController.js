let controllerLogin = {
    index: (req, res) => {
        res.render('index', {title: 'Mercado Liebre'})
    },
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login', {title: 'Mercado Liebre'})
    }

}



module.exports= controllerLogin;