const todoModel = require("../model/todoModel")


//get all todo
exports.getAllTodo=(req,res)=>{
   todoModel.find().then(response=>{
    res.status(200).json(response)
   })
   .catch(err=>{
    console.log(err)
    res.status(406).json({err:'error while fetching todos'})
})
}

//post  todo
exports.postTodo=(req,res)=>{
    const {todo}=req.body
    console.log(req.body)
    if(todo)
    {
        todoModel.create({
            todo
        }).then(response=>{
            res.status(200).json(response)
           })
           .catch(err=>{
            res.status(406).json({err:'error while adding todos'})

           })
    }
    else{
        res.status(406).json({err:'invalid id'})
    }
}



//delete todo
exports.deleteTodo=(req,res)=>{
    const {id}=req.params
    if(id)
        {
          todoModel.findOneAndDelete({_id:id})
            .then(response=>{
                res.status(200).json(response)
               })
               .catch(err=>{
                res.status(406).json({err:'error while  Deleting todos'})

               })
          
        }
        else{
            res.status(406).json({err:'invalid id'})
        }
}


//update todo
exports.updateTodo=(req,res)=>{
    const {id}=req.params
    const data=req.body
    console.log(data)
    if(id && data)
        {
          todoModel.findOneAndUpdate({_id:id},data)
          .then(response=>{
            res.status(200).json(response)
           })
           .catch(err=>{
            res.status(406).json({err:'error while  updating todos'})
           })
        }
        else{
            res.status(406).json({err:'invalid id or data'})
        }
}