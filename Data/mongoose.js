const mongoose = require("mongoose")


const connection = mongoose.model("",new mongoose.Schema({
place:String
}),
"cities"
)


module.exports=connection;