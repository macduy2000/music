import  {ActionTypes} from "../constain"
var userCookie=document.cookie.split(';').reduce((cookieObject, cookieString) => {
  let splitCookie = cookieString.split('=')
  try {
    cookieObject[splitCookie[0].trim()] = decodeURIComponent(splitCookie[1])
  } catch (error) {
    cookieObject[splitCookie[0].trim()] = splitCookie[1]
  }
  return cookieObject
}, []).user
const initialState={
  user :userCookie==undefined?{}:JSON.parse(userCookie)
}

const LoginReduce= (state=initialState,action)=>{
 switch(action.type){
 
   case ActionTypes.LOGIN:
  
    
      return {
        ...state,
        user:action.payload
     
      }
 
 default : return state
    }
 
    
}
export default LoginReduce