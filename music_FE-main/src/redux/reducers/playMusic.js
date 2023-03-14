import  {ActionTypes} from "../constain"
const initialState={
    song:{}
}

const playSongReducer= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.PLAY_MUSIC:
      return {
          ...state,
       song:action.payload
      }
 
 default : return state
    }
 
    
}
export default playSongReducer