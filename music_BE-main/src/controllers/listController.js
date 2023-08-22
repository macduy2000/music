import listService from "../services/listServices"

let addList=async(req,res)=>{
 
    let message=  await listService.createNewList(req.body)
    
     return res.send(message)
        }

        let getAllLists=async(req,res)=>{
 
            let message=  await listService.getAllLists(req.body)
             return res.send(message)
                }

                let updateListMusic=async(req,res)=>{
 
                    let message=  await listService.updateList(req.body)
                    
                     return res.send(message)
                        }

                        let deleteList=async(req,res)=>{
 
                            let message=  await listService.deleteList(req.body)
                            
                             return res.send(message)
                                }


                                module.exports={
                                    getAllLists,
                                   addList,
                                   updateListMusic,
                                   deleteList
                                }