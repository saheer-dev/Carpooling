const express = require("express")
const mongoose = require("mongoose")
const cities = require("./mongoose");
const cors = require("cors")


const app = express();
app.use(cors());
app.use(express.json())






mongoose.connect("mongodb://127.0.0.1:27017/cities")
.then(() =>{

    app.listen(3000, ()=>{
        console.log("running.....");
    });
});

app.get("/cities",async(req,res)=>{
    const city = await cities.find()
    // const place = await cities.find({
    //     $text: {$search:cities}
    // })
    res.send (city);

});

