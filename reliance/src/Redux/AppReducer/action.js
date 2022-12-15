import axios from 'axios';
import * as types from './actionTypes'


const ProdReq = () => {
    return {
      type: types.Get_Product_Req,
    };
  };
  
  const ProdSuc = (payload) => {
    return {
      type: types.Get_Product_Suc,
      payload,
    };
  };
  
  const ProdError = () => {
    return {
      type: types.Get_Product_Fail,
    };
  };

  const FetchTelevision =(dispatch)=>{
      dispatch(ProdReq());
      return axios
      .get('https://reliance-3bcw.onrender.com/television').then((res)=>{ 
          // console.log(res.data)
          dispatch(ProdSuc(res.data))
      }).catch(e=>{
          dispatch(ProdError())
          return e
      })
  }
  export {ProdError,ProdReq,ProdSuc, FetchTelevision}