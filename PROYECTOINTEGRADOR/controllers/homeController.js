let homeController = {
    index: (req, res) => {
        res.render('index', {title: 'Mercado Liebre'})
    },
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login', {title: 'Mercado Liebre'})
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
    profileEdit: (req, res) => {
        res.render('profileEdit')
    },
}



module.exports= homeController;