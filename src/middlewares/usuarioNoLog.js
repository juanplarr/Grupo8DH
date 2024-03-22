function usuarioNoLog(req, res, next) {
    if (!req.session.usuarioLogueado) {
        res.redirect('/login')
    }else{
    next();   
    }
    
}

module.exports = usuarioNoLog;