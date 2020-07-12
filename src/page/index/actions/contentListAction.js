import {LIST_DATA} from "./actionType";
import axios from "axios";

export const getListData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/listparams.json',

    }).then((response)=>{
        dispatch({
            type: LIST_DATA,
            obj: response.data
        })
    });
}