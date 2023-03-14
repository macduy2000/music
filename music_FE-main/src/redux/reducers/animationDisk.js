import  {ActionTypes} from "../constain"

const initialState={
    status:false
}

const animationDiskReducer= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.ANIMATION_DISK:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default animationDiskReducer