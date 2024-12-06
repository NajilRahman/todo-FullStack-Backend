const express=require('express')
const { getAllTodo, postTodo, updateTodo, deleteTodo } = require('../controler/todoControler')
const router=express.Router()

//get all todos
router.get('/tasks',getAllTodo)

//post todo
router.post('/tasks',postTodo)

//update  todo
router.put('/tasks/:id',updateTodo)

//delete  todo
router.delete('/tasks/:id',deleteTodo)


module.exports=router