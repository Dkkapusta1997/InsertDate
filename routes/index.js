const express=require('express');
const router=express.Router();

//Application to the costumer's question render page 'home'
router.get('/',(req,res)=>{

res.render('home')

});

//App render kontact.pug (file is in views) when client visit '/kontact'
router.get('/kontact',(req,res)=>{

    res.render('kontact')
    
});


module.exports=router;