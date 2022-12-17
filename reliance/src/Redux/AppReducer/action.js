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

  // Actions for Appliances

  const SoundbarReq = () => {
    return {
      type: types.Get_Soundbar_Req,
    };
  };

  const SoundbarSuc = (payload) => {
    return {
      type: types.Get_Soundbar_Suc,
      payload,
    };
  };

  const SoundbarError = () => {
    return {
      type: types.Get_Soundbar_Fail,
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

  const FetchWatch = (params)=>(dispatch)=>{
      dispatch(WatchReq());
      return axios.get(`https://reliance-3bcw.onrender.com/watch`,params).then(res=>{
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
  
  const FetchSoundBar = (dispatch)=>{
    dispatch(SoundbarReq());
    return axios.get(`https://reliance-3bcw.onrender.com/soundbar`).then(res=>{
        dispatch(SoundbarSuc(res.data))
    }).catch(e=>{
        dispatch(SoundbarError)
        return e
    })
  }

  export { 
    FetchWatch, 
    FetchAppliance, 
    FetchTelevision,
    FetchSoundBar, 
    ProdError, 
    ProdReq, 
    ProdSuc, 
    WatchError, 
    WatchSuc, 
    WatchReq, 
    ApplianceError, 
    ApplianceSuc, 
    ApplianceReq,
    SoundbarError, 
    SoundbarSuc, 
    SoundbarReq
  }