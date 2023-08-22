import db from '../models/index'
import userService from "../services/userSevices"

let allUser=async(req,res)=>{
   
  let message=  await userService.getAllUser()
  
   return res.send(message)
      
    }
let addUser=async(req,res)=>{
 
  let message=  await userService.createNewUser(req.body)
  
   return res.send(message)
      }

      let getOneUser=async(req,res)=>{
 
        let message=  await userService.getUser(req.body)
        
         return res.send(message)
            }



      module.exports={
        allUser,
        addUser,
        getOneUser

    }