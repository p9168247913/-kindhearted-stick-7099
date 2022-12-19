import axios from "axios"
import * as types from "./actionTypes"


const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios({
        method:"POST",
        url:"/login",
        baseURL:"https://reliance-3bcw.onrender.com",
        data:payload

    })
    
    .then((r)=>{
        dispatch({payload:r.data,type:types.LOGIN_SUCCESS})
        console.log(r.data)
    })
    .catch((e)=>({type:types.LOGIN_FAILURE,payload:e}))

}

export {login}