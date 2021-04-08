let controller = {
    index: (req, res) => {
        res.render('index', {title: 'Mercado Liebre'})
    },
    register: (req, res) => {
        res.render('register')
    }

}



module.exports= controller;