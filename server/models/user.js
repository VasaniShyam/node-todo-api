const mongoose=require('mongoose');


var User=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:true,
        trim:true

    }
});


module.exports=User;