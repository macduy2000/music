import  {ActionTypes} from "../constain"

const initialState={
    status:0
}

const selecteAlbumReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.SELECT_ALBUM:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default selecteAlbumReduce