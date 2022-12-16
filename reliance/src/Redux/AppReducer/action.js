import axios from 'axios';
import * as types from './actionTypes'

// Actions for televisions

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

// Actions for Watches
  
  const WatchReq = () => {
    return {
      type: types.Get_Watch_Req,
    };
  };
  
  const WatchSuc = (payload) => {
    return {
      type: types.Get_Watch_Suc,
      payload,
    };
  };
  
  const WatchError = () => {
    return {
      type: types.Get_Watch_Fail,
    };
  };

// Actions for Appliances

  const ApplianceReq = () => {
    return {
      type: types.Get_Appliance_Req,
    };
  };
  
  const ApplianceSuc = (payload) => {
    return {
      type: types.Get_Appliance_Suc,
      payload,
    };
  };
  
  const ApplianceError = () => {
    return {
      type: types.Get_Appliance_Fail,
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

  const FetchWatch = (dispatch)=>{
      dispatch(WatchReq());
      return axios.get(`https://reliance-3bcw.onrender.com/watch`).then(res=>{
          dispatch(WatchSuc(res.data))
      }).catch(e=>{
          dispatch(WatchError)
          return e
      })
  }

  const FetchAppliance = (dispatch)=>{
    dispatch(ApplianceReq());
    return axios.get(`https://reliance-3bcw.onrender.com/appliance`).then(res=>{
        dispatch(ApplianceSuc(res.data))
    }).catch(e=>{
        dispatch(ApplianceError)
        return e
    })
  }
  
  export { 
    FetchWatch, 
    FetchAppliance, 
    FetchTelevision, 
    ProdError, 
    ProdReq, 
    ProdSuc, 
    WatchError, 
    WatchSuc, 
    WatchReq, 
    ApplianceError, 
    ApplianceSuc, 
    ApplianceReq
  }