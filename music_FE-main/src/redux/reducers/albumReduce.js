import  {ActionTypes} from "../constain"
import DataSongs from "../../data/songs.json"
const initialState={
    list:[]
}

const albumReducer= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.GET_ALL_ALBUM:
      return {
          ...state,
          list:action.payload
      }

    case ActionTypes.ADD_ALBUM:
        return {
            ...state,
            list:action.payload
        }
        case ActionTypes.UPDATE_ALBUM:
            return {
                ...state,
                list:action.payload
            }
            case ActionTypes.DELETE_ALBUM:
                return {
                    ...state,
                    list:action.payload
                }
 
 default : return state
    }
 
    
}
export default albumReducer