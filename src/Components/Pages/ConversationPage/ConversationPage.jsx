import React from "react";
import Conversation from "./Conversation/Conversation"; 
import * as Popups from "Components/Popups/Popups"
import { useNavigate, useParams } from "react-router-dom";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";

export default function ConversationPage(){

    const {userId} = useParams()

    const [conversation, popupsObj] = useAxiosRequest(`Conversation/${userId}`, "get", undefined, undefined, false)
    const nav = useNavigate()
    console.log(conversation)
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            <Conversation conversation={conversation}/>
        </main>
    )
}