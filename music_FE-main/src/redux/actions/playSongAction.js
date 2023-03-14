import { ActionTypes } from "../constain"
export const playSong=(song)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.PLAY_MUSIC,
       payload:song
    })
}