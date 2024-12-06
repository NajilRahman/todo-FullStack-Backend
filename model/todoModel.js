const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

const todoModel=new mongoose.model('todos',todoSchema)


module.exports=todoModel