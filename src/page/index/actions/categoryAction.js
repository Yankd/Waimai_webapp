import {HEAD_DATA} from "./actionType";
import axios from "axios";

export const getHeaderData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/head.json',

    }).then((response)=>{
        dispatch({
            type: HEAD_DATA,
            obj: response.data
        })
    });
}