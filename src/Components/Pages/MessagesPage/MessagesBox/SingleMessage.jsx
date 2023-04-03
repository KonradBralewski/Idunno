import React from "react";

export default function SingleMessage({author, date, message}){
    return(
        <div className="flex flex-row w-40 tablet:w-72 laptop:w-96 max-h-fit
         bg-orange-700 border border-black">   
            <div className="flex flex-col bg-red-500 border-r-2 border-black m-1.5 pr-1">
                <p className="text-center text-xxs tablet:text-xs">{date}</p>
                <p className="text-center text-xxs tablet:text-xs m-auto">{author}</p>
            </div>
            <div className="m-auto flex-1">
                <p className="text-xxs tablet:text-xs line-clamp-1 text-center hover:shadow-xl pr-6 tablet:pr-10">{message}</p>
            </div>
            
        </div>
    )
}   