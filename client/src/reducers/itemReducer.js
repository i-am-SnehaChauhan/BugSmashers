import { ALL_ITEM_FAIL, ALL_ITEM_REQUEST, ALL_ITEM_SUCCESS,CLEAR_ERRORS } from "../constants/itemConstants";

export const itemReducer=(state={items:[]},action)=>
{
    switch(action.type)
    {
        case ALL_ITEM_REQUEST:
            return{
                loading:true,
               items:[]

            };
            case ALL_ITEM_SUCCESS:
                return{
                    loading:false,
                   items:action.payload.items,
              
                };
            case ALL_ITEM_FAIL:
                return{
                    loading:false,
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