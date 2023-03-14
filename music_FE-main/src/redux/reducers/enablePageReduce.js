import  {ActionTypes} from "../constain"

const initialState={
    status:0
}

const enablePageReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.ENABLE_PAGE:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default enablePageReduce