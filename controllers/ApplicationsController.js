
const Application=require('../models/application');

exports.store=(req,res)=>{

    Application.create({
        'email': req.body.email,
        'password':req.body.password
    }).then(function(){
        req.flash('form','Bedziesz jeszcze handlorz XD'+req.body.email);
        res.redirect('/login');
    })
};