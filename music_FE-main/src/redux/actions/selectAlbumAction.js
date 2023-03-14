import { ActionTypes } from "../constain"
export const selectedAlbumAction=(status)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.SELECT_ALBUM,
       payload:status
    })
}