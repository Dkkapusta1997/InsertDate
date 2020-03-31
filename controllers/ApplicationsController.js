exports.store=(req,res)=>{
req.flash('form','Bedziesz jeszcze handlorz XD'+req.body.email);
res.redirect('/login');
};