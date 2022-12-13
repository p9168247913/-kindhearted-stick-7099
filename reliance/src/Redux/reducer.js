import * as types from './actionTypes';

const initState = {
    prod_name:[],
    isLoading:false,
    isError:false
}

const reducer = (oldstate = initState, action) => {
    const {payload} = action;
    switch(action.type){
        case types.Get_Product_Req:
            return {...oldstate, isLoading:true}
        case types.Get_Product_Suc:
            return {...oldstate, isLoading:false, prod_name:payload}
        case types.Get_Product_Fail:
            return {...oldstate, isLoading:false, isError:true}
        default:
            return initState
    }
}

export {reducer}