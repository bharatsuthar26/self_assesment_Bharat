const express= require('express');
const fs= require("fs");
const router= express.Router();
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
router.get("/", (req,res)=>{
    res.sendFile('index.html',{root:'./'});

})

router.post("/submitdata",(req,res)=>{
    // res.send("Post Request")
const data={
       fname : req.body.fname,
       date: req.body.date,
       gender: req.body.gender,
       email : req.body.email,
       rollno: req.body.rollno,
       contact: req.body.contact,
       address: req.body.address
      
      };
      console.log(data);
    
    fs.appendFile('mynewfile1.txt', `Name:${data.fname}, Date of birth : ${data.date}, gender: ${data.gender},  Email:${data.email}, Rollno:${data.rollno}, Contact:${data.contact}, Address:${data.address}\n` , function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.sendFile('mynewfile1.txt',{root:'./'});

      });
      


   // const { name, email, rollNo, phoneNo, address } = req.body;
    // console.log( name, email, rollo, phoneNo, address )
    

    // res.json( "Successfully sent" );
})

module.exports= router;