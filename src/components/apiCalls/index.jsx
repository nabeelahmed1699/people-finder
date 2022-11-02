import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

export const nameSearch=(name)=>{
    axios.get(`${BASE_URL}data?name_like=${name}`)
    .then((res)=>{
        console.log('chipa_re',res.data)
        return res.data;
    })
    return;
}