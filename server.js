const express= require('express');
const app = express();
const PORT =5000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const mainRoutes= require('./routes/mainRoutes.js');

app.use('/',mainRoutes);


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
})
app.listen(PORT,(err)=>{
    if(err){ throw err}
    else{
        console.log(`Server work on ${PORT}`);
    }
})