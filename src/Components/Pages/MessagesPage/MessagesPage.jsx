import React from "react";
import MessagesBox from "./MessagesBox/MessagesBox";
import SendMessage from "./SendMessage/SendMessage";

export default function MessagesPage(){

    const [messagesCount, setMessagesCount] = React.useState(1)

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            {messagesCount > 0 && <p className="text-sm tablet:text-lg">Your Messages</p>}
            <MessagesBox messagesCount={messagesCount} setMessagesCount={setMessagesCount}/>
            <SendMessage/>
        </div>
    )
}