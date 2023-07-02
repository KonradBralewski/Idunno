import React from "react";
import SendNewMessage from "./SendNewMessage";

export default function Conversation({shouldHideConversation}){
    return (
        <div className="absolute bg-gradient-to-br from-green-300 to-green-900 border border-black w-4/6 h-72
            top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -mt-12 flex flex-col"
            style={{opacity : `${!shouldHideConversation ? 1.0 : 0.0}`}}>
            <SendNewMessage/>
        </div>
    )
}