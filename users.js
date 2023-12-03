const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    emails:{
        type:SVGStringList,
        required:true,
    },
phone:{
    type:String,
    required:true,
},
image:{
    type:String,
    required:true,
},
created:{
    type:Date,
    required:true,
    default:Date.now,
},
});
module.exports=mongoose.model("User",userSchema);