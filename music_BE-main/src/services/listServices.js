import db from '../models/index';
// lấy ra danh sách album bài hát
const getAllLists=async(data)=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allLists= await db.Lists.findAll({
            where: {
               status:1,
               user_id:data.user_id
       
               },
            raw:true
        }) 
        resolve(allLists)
      }
      catch(e){
        reject(e)
      }
    })
  }
  // them danh sach
  const createNewList = async(data) =>{
    return new Promise(async (resolve, reject) => {
        try {
        
        
           await db.Lists.create({
            name: data.name,
            user_id: data.user_id,
            status: 1
           })
          
           let allLists= await db.Lists.findAll({
            where: {
                status:1,
                user_id:data.user_id
        
                },
            raw:true}) 
        
      resolve(allLists);
    
  
        } catch (e) {
            reject(e);
        }
    })
    
   
  }
  // cap nhat ten

  const updateList=(data)=>{
    return new Promise(async(resolve,reject)=>{
  try{
    let user=db.Lists.findOne({
      where: { id: data.id }
    })
    if(user){
     await db.Lists.update(
      {
        name: data.name,
      
      },
      {
        where: { id: data.id },
      }
    );
    let allLists= await db.Lists.findAll({ where: {
        status:1,
        user_id:data.user_id
        },raw:true}) 
    
  resolve(allLists);}
  else  resolve( await db.Lists.findAll({ where: {
    status:1,
    user_id:data.user_id

    },
    raw:true}) )
  }
  catch(e){
    reject(e)
  }
    })
  }

  const deleteList=async(data)=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let user=db.Lists.findOne({
          where: { id: data.id }
        })
        if(user){
         await db.Lists.update(
          {
              status:0
            },
            {
              where: { id: data.id },
            }
        );
        let allLists= await db.Lists.findAll({
            where: {
                status:1,
                user_id:data.user_id
        
                },
            raw:true}) 
        
      resolve(allLists);}
      else  resolve( await db.Lists.findAll({
        where: {
            status:1,
            user_id:data.user_id
    
            },
        raw:true}) )
      }
      catch(e){
        reject(e)
      }
        })
  }

  module.exports={
createNewList,
updateList,
deleteList,
getAllLists

}