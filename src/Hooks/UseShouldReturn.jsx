import { popupsObject } from "Components/Popups/Popups";
import { hasSameProps } from "Helpers/JsonHelpers";
import React from "react";
import { useNavigate } from "react-router-dom";
import { receiveErrorCode } from "Helpers/JsonHelpers";

export default function useShouldReturn(arrayToListen){
    
    const nav = useNavigate()
    React.useEffect(()=>{
        
        for(let item of arrayToListen){
            if(hasSameProps(item, popupsObject)){
                if(item.error === undefined) return

                if(receiveErrorCode(item.error) == 401){
                    nav("/Auth")
                }else {nav("/Idunno")}
            }
        }
    }, arrayToListen)

    return null
}