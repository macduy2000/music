import { ActionTypes } from "../constain"
import axios from "axios"
export const listSong=()=>{
    return (dispatch)=>{
        return (
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-song`)
            .then(res => {
             dispatch({ 
                type:ActionTypes.GET_LIST,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    } 
}

export const topMonth=()=>{
    return (dispatch)=>{
        return (
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/top-month`)
            .then(res => {
             dispatch({ 
                type:ActionTypes.TOP_MONTH,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    } 
}

export const topWeek=()=>{
    return (dispatch)=>{
        return (
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/top-week`)
            .then(res => {
                console.log(res.data)
             dispatch({ 
                type:ActionTypes.TOP_WEEK,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    } 
}

export const findSong=(song)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.GET_LIST,
       payload:song
    })
}

