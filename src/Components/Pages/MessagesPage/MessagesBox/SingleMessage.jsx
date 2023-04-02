import React from "react";

export default function SingleMessage({author, date, message}){
    return(
        <div className="flex flex-row bg-red-300 border-2 w-40 tablet:w-72 laptop:w-96">   
            <div className="flex flex-col">
                <p>{date}</p>
                <p>{author}</p>
            </div>
            <p className="m-auto bg-red-500 flex-1 flex-wrap max-h-full max-w-full">{message}</p>
        </div>
    )
}   