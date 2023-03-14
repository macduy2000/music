import  {ActionTypes} from "../constain"

const initialState={
    status:"thêm thành công"
}

const registerReduce= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.REGISTER:
      return {
        
          status:action.payload
      }
 
 default : return state
    }
 
    
}
export default registerReduce