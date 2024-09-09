const express=require("express");
const router=express.Router();
const UserController=require("../controllers/UserController");

router.get("/users",(req,res)=>{
    UserController.getUser(req,res);
})

router.get("/users/:id",(req,res)=>{
    UserController.getParticularUser(req,res);
})
module.exports=router;