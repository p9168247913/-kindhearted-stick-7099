import axios from "axios"
import * as types from "./actionTypes"

const register=(payload)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST})
    return axios({
        method:"POST",
        url:"/signup",
        baseURL:"https://reliance-3bcw.onrender.com",
        data:payload

    })
    
    .then((r)=>{
        dispatch({type:types.SIGNUP_SUCCESS,payload:r.data})
        console.log(r.data)
    })
    .catch((e)=>({type:types.SIGNUP_FAILURE,payload:e}))

}

export {register}