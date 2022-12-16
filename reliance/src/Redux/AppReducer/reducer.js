import * as types from './actionTypes';

const initState = {
    prod_name:[],
    allwatch:[],
    appliances:[],
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
        case types.Get_Watch_Req:
            return {...oldstate, isLoading:true}
        case types.Get_Watch_Suc:
            return {...oldstate, isLoading:false, allwatch:payload}
        case types.Get_Watch_Fail:
            return {...oldstate, isError:true, isLoading:false}
        case types.Get_Appliance_Req:
             return {...oldstate, isLoading:true}
        case types.Get_Appliance_Suc:
            return {...oldstate, isLoading:false, appliances:payload}
        case types.Get_Appliance_Fail:
            return {...oldstate, isError:true, isLoading:false}
        default:
            return initState
    }
}

export {reducer}