import { ActionTypes } from "../constain"
export const enableAlbumAction=(status)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.ALBUM,
       payload:status
    })
}