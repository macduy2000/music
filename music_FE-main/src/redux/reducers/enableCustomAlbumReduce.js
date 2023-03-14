import  {ActionTypes} from "../constain"

const initialState={
    status:false
}

const enableAlbumReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.ALBUM:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default enableAlbumReduce