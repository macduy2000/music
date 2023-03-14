import  {ActionTypes} from "../constain"
import DataSongs from "../../data/songs.json"
import { useSelector } from "react-redux"
const initialState={
  list:DataSongs
}

const listSongReducer= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.GET_LIST:
    var listSong=[]
    action.payload.map((data,index)=>{
                listSong=[...listSong,{...data,index:index+1}]
             })
     
      return {
        list:listSong
      }
      
    case ActionTypes.GET_SONG:
        var listSong=[]
        var count=0
         action.payload.map((data)=>{
        
          DataSongs.map((song)=>{
            
                if(  data.song_id-1==song.id){
                    count+=1
                    listSong=[...listSong,{...song,index:count,idDB:data.id,idList:data.list_id}]
                }
              })
          })
          
      return {
        list:listSong
      }
    
          case ActionTypes.TOP_MONTH:
            var listSong=[]
            action.payload.map((data,index)=>{
                        listSong=[...listSong,{...data,index:index+1}]
                     })
             
              return {
                list:listSong
              }

              case ActionTypes.TOP_WEEK:
                var listSong=[]
                action.payload.map((data,index)=>{
                            listSong=[...listSong,{...data,index:index+1}]
                         })
                 
                  return {
                    list:listSong
                  }


    

 
 default : return state
    }
 
    
}
export default listSongReducer