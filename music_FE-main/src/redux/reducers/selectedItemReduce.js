import  {ActionTypes} from "../constain"

const initialState={
    status:0
}

const selectedItemReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.SELECT_ITEM:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default selectedItemReduce