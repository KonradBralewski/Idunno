import React from "react"
import * as Popups from "Components/Popups/Popups"
import ExpPost from "./ExpPost"
import { useNavigate } from "react-router-dom"
import ExpPostsErrorHandler from "./ExpPostsErrorHandler"
import { useAxiosRequest } from "Hooks/UseAxiosRequest"
import { checkIfAnyIsTrue, receiveErrorCode } from "Helpers/JsonHelpers"
import useShouldReturn from "Hooks/UseShouldReturn"
import useFilteredRequest from "Hooks/UseFilteredRequest"

export default function HBExpPostsList({searchMatch}){
    const nav = useNavigate()

    const [posts, popupsObj] = useFilteredRequest("Posts", "Posts/ByMatch?match", "get", searchMatch)

    function mapPosts(){
        if(popupsObj.errorMessage != undefined) return
        if(posts === undefined) return

        return posts.map(post =>
            <ExpPost postId={post.postId} key={post.postId} title={post.postTitle} 
            date={post.postDate} description={post.postDescription}
            imagePath={post.imagePath}
            handleClick={()=>{nav(`/Posts/${post.postId}`)}}/>)
    }

    function shouldUseHandler(){
        
        if(popupsObj.wasErrorShowed && popupsObj.error != undefined && !checkIfAnyIsTrue(popupsObj.visiblePopus)){
            return true
        }
        
        return false
    }

    useShouldReturn([posts, popupsObj])

    return(
        <main className="m-auto flex flex-col">
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            {shouldUseHandler() && <ExpPostsErrorHandler error={popupsObj.errorMessage}/>}
            {mapPosts()}
        </main>
    )
}