
import * as types from "../LoginReducer/actionTypes"
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
         case types.LOGIN_REQUEST:
            return {
              ...state,
              isLoading:true,
              isError:false
            }

            case types.LOGIN_SUCCESS:
                console.log(state)
                return {
                  ...state,
                  isAuth:true,
                  token:payload,
                  isLoading:false,
                  isError:false
                }

                case types.LOGIN_FAILURE:
                    return {
                      ...state,
                      isAuth:false,
                      token:"",
                      isLoading:false,
                      isError:true,
                    }


          default:
            return state
        }
};

export { reducer };
