function admin(req, res, next) {
    if (req.session.usuarioLogueado.rol != 1) {
        res.redirect('/productclient')
    }else{
    next();   
    }
    
}

module.exports = admin;