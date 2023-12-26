const express = require('express');
const app= express();
 let port = 3002;
 const path =require('path');
//  require('./success');
//  require('./error');

const empCollection = require('./model/model');



const template_path=path.join(__dirname,'../react-website-clb/template/views');
 
 app.set('view engine','hbs');
 app.set('views', template_path)

 app.use(express.urlencoded({extended : false}));

 app.use(express.static(path.join(__dirname, 'assets')));


 require('./Db/db');

 app.get('/form', (req,res)=>{
     res.render("form");
 })
 app.post('/empregister', async(req,res)=>{
    try {
        const empregister=new empCollection({
            name : req.body.name,
            email:req.body.email,
            mb_number:req.body.mb_number,
            street_1 :req.body.street_1,
            street_2:req.body.street_2,
            pin_code:req.body.pin_code,
            city:req.body.city,
            
     })
         await empregister.save();
        // res.send(postData);
        res.redirect("./success")
    } 
    catch (error) {
      res.redirect('./error')
      console.log(error);
        
    }

 });

 app.get("/success",(req,res)=>{
    res.sendFile(__dirname+ "/pages/success.html");
    res.sendFile(__dirname+ "/assets/dp-1.jpg")

 })

 app.get("/assets/dp-1.jpg", (req, res) => {
    res.sendFile(__dirname + "/assets/dp-1.jpg");
});

 app.get("/error",(req,res)=>{
    res.sendFile(__dirname+ "/pages/error.html")
 })
  

app.listen(port, ()=>{
    console.log(`listing to port ${port}`)
})