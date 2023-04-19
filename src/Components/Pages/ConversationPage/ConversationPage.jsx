import React from "react";
import Conversation from "./Conversation/Conversation"; 
import * as Popups from "Components/Popups/Popups"
import { useNavigate, useParams } from "react-router-dom";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import useShouldReturn from "Hooks/UseShouldReturn";
import { checkIfAnyIsTrue } from "Helpers/JsonHelpers";


export default function ConversationPage(){
    const {userId} = useParams()

    const [conversation, popupsObj] = useAxiosRequest(`Conversation/${userId}`, "get", undefined, undefined)
    const nav = useNavigate()

    if(popupsObj.wasErrorShowed && !checkIfAnyIsTrue(popupsObj.visiblePopus)){
        nav("/Idunno")
        return true
    }

    const shouldHide = popupsObj.error != undefined
    
    console.log(shouldHide)
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            <Conversation conversation={conversation} shouldHideConversation={shouldHide}/>
        </main>
    )
}