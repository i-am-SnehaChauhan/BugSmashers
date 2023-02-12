import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL } from "../constants/userConstants";

export const login=(email,password)=> async(dispatch)=>{
    try{
        dispatch({
            type:LOGIN_REQUEST
        })
        const config={
            headers:{"Content-Type":"application/json"}
        }
        const {data}=await axios.post(`/api/v1/login`,{email,password},config);
        console.log(data);

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })

    }
    catch(error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}