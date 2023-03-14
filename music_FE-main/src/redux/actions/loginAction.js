import { ActionTypes } from "../constain"
import axios from "axios"

export const loginAction =(data)=>{
    return (dispatch)=>{
        return (
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/get-user`,{
            
              passWord:data.pass,
              email:data.email,
           
            })
            .then(res => {
         if(res.data.id==undefined){
            alert("không tồn tại tài khoản này")
         }
         else{
             dispatch({ 
                type:ActionTypes.LOGIN,
                payload:res.data})
              
             }
            })
            .catch(error => console.log(error))
        )
    }
}


