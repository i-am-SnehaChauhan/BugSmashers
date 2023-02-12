import axios from "axios";
import { ALL_ITEM_REQUEST, ALL_ITEM_SUCCESS,ALL_ITEM_FAIL } from "../constants/itemConstants";

export const getItems=(id)=> async(dispatch)=>{
    try{
        dispatch({
            type:ALL_ITEM_REQUEST
        })
        const {data}=await axios.get(`/api/v1/items/${id}`);
        console.log("got"+data);

        dispatch({
            type:ALL_ITEM_SUCCESS,
            payload:data
        })

    }
    catch(error){
        dispatch({
            type:ALL_ITEM_FAIL,
            payload:error.response.data.message
        })
    }
}