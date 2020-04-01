const knex=require('knex')(require('../config/knexflie'));

exports.home=(req,res)=>{

    res.render('home',{
        formMessage: req.flash('form')
    });
    
    };

exports.search=(req,res)=>{
   knex.select('name').from('Product').then(function(product){
      
    
       console.log(product.length);
       product.forEach(element=>{
            
          
       })
   })
}
