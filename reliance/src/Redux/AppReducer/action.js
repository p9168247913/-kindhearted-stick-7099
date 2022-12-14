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

  export {ProdError,ProdReq,ProdSuc}