import React from "react";
import SingleMessage from "./SingleMessage";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import noMessagesImg from "Assets/noMessages.png"
import { useNavigate } from "react-router-dom";
import useShouldReturn from "Hooks/UseShouldReturn";


export default function MessagesBox({messagesCount, setMessagesCount}){

    const [response, popupsObj] = useAxiosRequest("Messages/CurrentUser", "get")
    const nav = useNavigate()

    useShouldReturn([response, popupsObj])

    const noMessagesHandling = () => {
        return (
            <div>
                <img src={noMessagesImg} className="absolute m-auto left-10 right-0 w-40"/>
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
         message={message.msg} date ={message.msgDate}/>
       })

        return mappedMsg
    }

    React.useEffect(()=>{
        if(response === undefined) return
        setMessagesCount(response.length)
    },[response, popupsObj])

    return (
        <main>
            <Popups.Popups popupsObj={popupsObj}/>
                {mapMessages()}
        </main>
    )
}