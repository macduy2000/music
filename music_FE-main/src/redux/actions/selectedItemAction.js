import { ActionTypes } from "../constain"
export const selectedItemAction=(status)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.SELECT_ITEM,
       payload:status
    })
}