import axios from "axios";
import { ALL_SHOP_REQUEST, ALL_SHOP_SUCCESS,ALL_SHOP_FAIL } from "../constants/shopConstants";

export const getShop=()=> async(dispatch)=>{
    try{
        dispatch({
            type:ALL_SHOP_REQUEST
        })
        const {data}=await axios.get(`/api/v1/shops`);
        console.log(data);

        dispatch({
            type:ALL_SHOP_SUCCESS,
            payload:data
        })

    }
    catch(error){
        dispatch({
            type:ALL_SHOP_FAIL,
            payload:error.response.data.message
        })
    }
}