import React from "react";
import MessagesBox from "./MessagesBox/MessagesBox";
import SendMessage from "./SendMessage/SendMessage";

export default function MessagesPage(){

    const [messagesCount, setMessagesCount] = React.useState(1)

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            {messagesCount > 0 && <p className="text-sm tablet:text-lg overflow-hidden p-1">Your Messages</p>}
            <MessagesBox setMessagesCount={setMessagesCount}/>
            <SendMessage/>
        </div>
    )
}