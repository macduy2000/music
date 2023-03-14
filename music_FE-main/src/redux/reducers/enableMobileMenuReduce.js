import  {ActionTypes} from "../constain"

const initialState={
    status:false
}

const enableMobileMenuReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.ENABLE_MOBILE_MENU:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default enableMobileMenuReduce