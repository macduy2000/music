import db from '../models/index';
const getAllSongs=async()=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allSongs= await db.Songs.findAll({
            raw:true
        }) 
        resolve(allSongs)
      }
      catch(e){
        reject(e)
      }
    })
  }
   
  const gettop20Month=async()=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allSongs= await db.Songs.findAll({
            raw:true
        }) 
        resolve(   getMultipleRandom(allSongs, 20)  )
      }
      catch(e){
        reject(e)
      }
    })
  }
  const gettop20week=async()=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allSongs= await db.Songs.findAll({
            raw:true
        }) 
        resolve(   getMultipleRandom(allSongs, 20)  )
      }
      catch(e){
        reject(e)
      }
    })
  }


  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  module.exports={
    getAllSongs,
    gettop20Month,
    gettop20week
  }