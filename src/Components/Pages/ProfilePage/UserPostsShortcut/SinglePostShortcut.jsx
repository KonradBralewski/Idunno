import React from "react"
import { rawHtmlToJSXWithClass } from "Helpers/EditorHelpers"
import { useNavigate } from "react-router-dom"

export default function SinglePostShortcut({post}){
    const nav = useNavigate()
    return (
        <div className="border-orange-500 border mb-1 max-h-14 tablet:max-h-20 rounded-md hover:bg-orange-800" onClick={()=> nav(`/Posts/${post.postId}`)}>
            <p className="text-xxs ml-1">{post.postDate}</p>
            {rawHtmlToJSXWithClass(post.postTitle, "p", "text-xxs ml-1 text-center")}
            {rawHtmlToJSXWithClass(post.postDescription, "p", "text-xxs ml-1 text-center")}
        </div>
    )
}