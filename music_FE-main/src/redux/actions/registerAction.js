import { ActionTypes } from "../constain"
import axios from "axios"

export const postRegisterAction =(data)=>{
    return (dispatch)=>{
        return (
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-user`,{
              userName:data.username,
              passWord:data.pass,
              email:data.email,
              status:1,
              roleId:0
            })
            .then(res => {
                alert(res.data)
             dispatch({ 
                type:ActionTypes.REGISTER,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}


