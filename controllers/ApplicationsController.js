
const Application=require('../models/application');

exports.store=(req,res)=>{

    Application.create({
        'email': req.body.email,
        'password':req.body.password
    }).then(function(){

        //flash information to user
        req.flash('form','Bedziesz jeszcze handlorz XD'+req.body.email);
        //what will render
        res.redirect('/login');
    },
        function(){
            req.flash('form','mamy blad');
            res.redirect('/')
            console.log("blad");
        });
    };
