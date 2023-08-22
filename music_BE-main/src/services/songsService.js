import db from '../models/index';
const getAllSongs=async(data)=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allLists= await db.Favorites.findAll({
            where: {
               status:1,
               user_id:data.user_id,
               list_id:data.list_id
       
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

 
  const addSong=async(data)=>{
    return new Promise(async(resolve,reject)=>{
  try{
    let song=await db.Favorites.findOne({
      where: { song_id: data.song_id, user_id:data.user_id,list_id:data.list_id }
    })
   
    if(!song){
        await db.Favorites.create({
            song_id: data.song_id,
            user_id: data.user_id,
            list_id: data.list_id,
            status:1
           })
        let result ="Thêm thành công."
  resolve(result);}
  else  resolve("Bài hát đã tồn tại trong album." )
  }
  catch(e){
    reject(e)
  }
    })
  }


  const deleteSong=(data)=>{
    return new Promise(async(resolve,reject)=>{
  try{
    let song=db.Favorites.findOne({
      where: { id: data.id, user_id:data.user_id,list_id:data.list_id }
    })
    if(song){
        await db.Favorites.update(
            {
                status:0
              },
              {
                where: { id: data.id ,user_id:data.user_id,list_id:data.list_id},
              }
          );
   
        let result ="Xoá thành công."
  resolve(result);}
  else  resolve("Xoá thất bại.")
  }
  catch(e){
    reject(e)
  }
    })
  }

  module.exports={
    getAllSongs,
    addSong,
    deleteSong
  }