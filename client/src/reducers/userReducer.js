import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,CLEAR_ERRORS } from "../constants/userConstants";
export const userReducer=(state={user:{}},action)=>
{
    switch(action.type)
    {
        case LOGIN_REQUEST:
            return{
                loading:true,
                isAuthenticated:false,
          

            };
            case LOGIN_SUCCESS:
                return{
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload.user,
              
                };
            case LOGIN_FAIL:
                return{
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload

                }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null

                }
            
                default:
                    return state;


    }
}