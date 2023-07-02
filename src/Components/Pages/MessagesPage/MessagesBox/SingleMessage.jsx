import { rawHtmlToJSXWithClass } from "Helpers/EditorHelpers";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleMessage({author, authorId, date, message, messageId, opacity}){

    const nav = useNavigate()
    const navToConversationPage = () => {
        if(authorId != undefined){
            nav(`/Conversation/${authorId}`)
        }
    }

    const style = opacity == 1.0 ? {} : {opacity : opacity}
    
    return(
        <div className="flex flex-row w-40 tablet:w-72 laptop:w-96 max-h-fit
        bg-gradient-to-br from-green-300 to-green-900 border border-black" onClick={navToConversationPage} style={style}>   
            <div className="flex flex-col border-black m-1.5 px-1 hover:shadow-md hover:shadow-black">
                <p className="text-center text-xxs tablet:text-xs font-bold">{date}</p>
                <p className="text-center text-xxs tablet:text-xs m-auto font-bold">{author}</p>
            </div>
            <div className="m-auto flex-1 mr-1 2 bg-white rounded-2xl hover:shadow-md hover:shadow-black">
                {rawHtmlToJSXWithClass(message, "p", "text-xxs tablet:text-xs line-clamp-1 font-bold text-center px-2")}    
            </div>
            
        </div>
    )
}   