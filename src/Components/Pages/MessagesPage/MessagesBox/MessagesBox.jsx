import React from "react";
import SingleMessage from "./SingleMessage";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import noMessagesImg from "Assets/noMessages.png"
import { useNavigate } from "react-router-dom";
import useShouldReturn from "Hooks/UseShouldReturn";
import { checkIfAnyIsTrue } from "Helpers/JsonHelpers";


export default function MessagesBox({setMessagesCount}){

    const [response, popupsObj] = useAxiosRequest("Messages/CurrentUser", "get")
    const nav = useNavigate()

    useShouldReturn([response, popupsObj])

    const noMessagesHandling = () => {
        return (
            <div>
                <img src={noMessagesImg} className="absolute m-auto left-10 right-0 w-48 top-1/3 -translate-y-1/2 tablet:w-64"/>
                <p>You have no messages.</p>
            </div>
        )
    }

    const mapMessages = () => {
        if(response === undefined) return
        if(response.length === 0) return noMessagesHandling()
        const mappedMsg = response.map(response => {
        const message = response.message

        return <SingleMessage key={message.messageId}
         messageId = {message.messageId} author={response.shipperName}
         authorId = {message.shipperId} message={message.msg} date ={message.msgDate}
         opacity={checkIfAnyIsTrue(popupsObj.visiblePopups) ? 0.3 : 1}/>
       })

        return mappedMsg
    }

    React.useEffect(()=>{
        if(response === undefined) return
        setMessagesCount(response.length)
    },[response, popupsObj])

    return (
        <main className="px-1">
                <div className="absolute m-auto left-0 right-0 top-36">
                    <Popups.Popups popupsObj={popupsObj}/>
                </div>
                {mapMessages()}
        </main>
    )
}