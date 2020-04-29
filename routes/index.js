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


router.post('/kontact',(req,res)=>{
    console.log("wszedlem w posta");
    res.send("Jakas odpowiedz z bazy");
});

router.get('/login',(req,res)=>{
    res.render('login')
})


module.exports=router;