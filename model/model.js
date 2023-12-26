const mongoose= require('mongoose');

const empSchema=new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    email :{
        type:String,
        unique : true,
        required : true,
    },
    mb_number :{
        type:Number,
        unique : true,
        required : true,
    },
    street_1 :{
        type:String,
        required:true,
    },
    street_2 :{
        type:String,
    },
    pin_code :{
        type:Number,
        required: true,
    },
    city :{
        type:String,
        required: true,

    },
});

const empCollection= new mongoose.model('empcollection',empSchema);

module.exports=empCollection;