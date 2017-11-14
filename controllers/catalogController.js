

exports.view_catalog_get = (req, res)=>{
    if(req.session.user_id){
        res.render('catalog');
    }
    else{
        res.redirect('/');
    }
}
exports.view_contact_get = (req, res)=>{
    if(req.session.user_id){
        res.render('contact');
    }
    else{
        res.redirect('/');
    }
}