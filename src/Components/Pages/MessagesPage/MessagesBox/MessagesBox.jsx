import React from "react";
import SingleMessage from "./SingleMessage";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import { receiveErrorCode } from "Helpers/JsonHelpers";
import { useNavigate } from "react-router-dom";
import useShouldReturn from "Hooks/UseShouldReturn";


export default function MessagesBox(){

    const [response, popupsObj] = useAxiosRequest("Messages/CurrentUser", "get")
    const nav = useNavigate()

    useShouldReturn([response, popupsObj])

    const mapMessages = () => {
        if(response === undefined) return

       const mappedMsg = response.map(response => {
        const message = response.message
        if(message.messageId % 2 == 0) return
        return <SingleMessage key={message.messageId}
         messageId = {message.messageId} author={response.shipperName}
         message={message.msg} date ={message.msgDate}/>
       })

        return mappedMsg
    }

    return (
        <main>
            <Popups.Popups popupsObj={popupsObj}/>
            <div>
                {mapMessages()}
            </div>
        </main>
    )
}