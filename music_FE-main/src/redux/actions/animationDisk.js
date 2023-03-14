import { ActionTypes } from "../constain"
export const animationDisk=(status)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.ANIMATION_DISK,
       payload:status
    })
}