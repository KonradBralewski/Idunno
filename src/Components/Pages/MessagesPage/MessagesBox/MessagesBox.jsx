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

       const mappedMsg = response.map(response => <SingleMessage key={response.message.messageId}
        messageId = {response.message.messageId} author={response.shipperName} message={response.message.msg}/>)

        return mappedMsg
    }

    return (
        <main className="-mt-32">
            <Popups.Popups popupsObj={popupsObj}/>
            <div>
                {mapMessages()}
            </div>
        </main>
    )
}