const express=require('express');
const router=express.Router();

const PageController=require('../controllers/PagesController');
const ApplicationController=require('../controllers/ApplicationsController');


//EndPoint, Response to client when he viiit '/'
router.get('/',PageController.home);

//Show Product to searching
router.get('/search',PageController.search)

//When i send form
router.post('/application',ApplicationController.store)

//App render kontact.pug (file is in views) when client visit '/kontact'
router.get('/kontact',(req,res)=>{

    res.render('kontact')
    
});

router.get('/login',(req,res)=>{
    res.render('login')
})


module.exports=router;