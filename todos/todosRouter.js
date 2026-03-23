const express=require("express")
const  router=express.Router()
const todocontroller=require("./todosController")

router.get("/getAllTodos",todocontroller.getAllTodos)
router.get("/getMyTodos",todocontroller.getMyTodos)
router.post("/addTodo",todocontroller.addTodo)
router.delete("/deleteTodo/:id",todocontroller.deleteTodo)
router.put("/updateTodo/:id",todocontroller.updateTodo)

module.exports=router