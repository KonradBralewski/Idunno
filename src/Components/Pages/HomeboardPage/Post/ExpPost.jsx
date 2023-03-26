import React from "react";
import notFoundImg from "Assets/imgNotFound.jpg"
import errorImg from "Assets/imgError.jpg"
import demoImg from "Assets/Demo.jpg"
import { rawHtmlToJSXWithClass } from "Helpers/EditorHelpers";


export default function ExpPost(props){

    function getImage(){
        if(props.postID === 0){     // regular post received from API cannot have id === 0 or -1
                                    // It will be used for ExpPost instanced prepared as response for not getting any posts.
            return errorImg
        }
        else if(props.postID === -1){
            return notFoundImg
        }

        return demoImg
    }

    return(
        <article className="text-black mb-10 w-44 m-auto mt-1 tablet:w-60 laptop:w-72">
            <section className="flex flex-row gap-5">
                {rawHtmlToJSXWithClass(props.title, "p", "m-auto text-xs tablet:text-sm")}
            </section>
            {props.date && <p className="text-center text-xxs tablet:text-xs">{props.date}</p>}
            <img src={getImage()} alt="post" className="object-cover my-2 m-auto h-28 tablet:h-60 laptop:h-72" onClick={()=>props.handleClick(props.postID)}/>
            {rawHtmlToJSXWithClass(props.description, "p", "line-clamp-2 tablet:line-clamp-3 text-center text-xs tablet:text-sm")}
        </article>
    )
}