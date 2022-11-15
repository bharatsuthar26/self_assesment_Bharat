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
    let fname = req.body.fname;
    let date= req.body.dob;
    let gender= req.body.gender.value;
    let email = req.body.email;
    let rollno= req.body.rollno;
    let contact= req.body.contact;
    let address= req.body.address;


    // res.send(`Name is ${fname}, Date of birth is ${date} gender is ${gender} email is ${email} rollno is ${rollno}
    //  contact number is ${contact} and address is ${address} `);
    res.sendFile('mynewfile1.txt',{root:'./'});
    
    

    fs.appendFile('mynewfile1.txt', `Name:${fname}, Date of birth : ${date}, gender: ${gender},  Email:${email}, Rollno:${rollno}, Contact:${contact}, Address:${address}\n` , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      

   // const { name, email, rollNo, phoneNo, address } = req.body;
    // console.log( name, email, rollo, phoneNo, address )
    

    // res.json( "Successfully sent" );
  })

module.exports= router;