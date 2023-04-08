import React from "react";
import errorImg from "Assets/imgError.jpg"
import demoImg from "Assets/Demo.jpg"
import { rawHtmlToJSXWithClass } from "Helpers/EditorHelpers";


export default function ExpPost({postId, title, date, description, handleClick}){

    function getImage(){
        if(postId === 0) return errorImg     // regular post received from API cannot have id === 0
                                             // It will be used for ExpPost instance prepared as response for error
        return demoImg
    }

    return(
        <article className="text-black mb-10 w-44 m-auto mt-1 tablet:w-60 laptop:w-72">
            <section className="flex flex-row gap-5">
                {rawHtmlToJSXWithClass(title, "p", "m-auto text-xs tablet:text-sm")}
            </section>
            {date && <p className="text-center text-xxs tablet:text-xs">{date}</p>}
            <img src={getImage()} alt="post" className="object-cover my-2 m-auto h-28 tablet:h-60 laptop:h-72 hover:border hover:blur-sm" 
            onClick={handleClick}/>
            {rawHtmlToJSXWithClass(description, "p", "line-clamp-2 tablet:line-clamp-3 text-center text-xs tablet:text-sm")}
        </article>
    )
}