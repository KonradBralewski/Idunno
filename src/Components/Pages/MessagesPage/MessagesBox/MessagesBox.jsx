import React from "react";
import SingleMessage from "./SingleMessage";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import { receiveErrorCode } from "Helpers/JsonHelpers";
import { useNavigate } from "react-router-dom";


export default function MessagesBox(){

    const [messages, popupsObj] = useAxiosRequest("Messages/CurrentUser", "get")
    const nav = useNavigate()

    React.useEffect(()=>{
        
        if(popupsObj.errorMessage === undefined) return

        if( receiveErrorCode(popupsObj.error) == 401){
            nav("/Auth")
        }else {nav("/Idunno")}
    }, [messages, popupsObj])

    return (
        <main className="-mt-32">
            <Popups.Popups popupsObj={popupsObj}/>
            <div>
                {messages != undefined && messages.map(msg => <SingleMessage key = {msg.messageId} message={msg.msg}/>)}
            </div>
        </main>
    )
}