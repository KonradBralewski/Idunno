import React from "react"
import * as Popups from "Components/Popups/Popups"
import ExpPost from "./ExpPost"
import { useNavigate } from "react-router-dom"
import ExpPostsErrorHandler from "./ExpPostsErrorHandler"
import { useAxiosRequest } from "Hooks/UseAxiosRequest"
import { checkIfAnyIsTrue } from "Helpers/JsonHelpers"

export default function HBExpPostsList({searchMatch}){

    
    const [requestNoun, setRequestNoun] = React.useState(()=>"Posts")
    const [posts, popupsObj] = useAxiosRequest(requestNoun, "get")
    
    const nav = useNavigate()

    React.useEffect(()=>{
        if(searchMatch.length == 0) {
            setRequestNoun("Posts")
            return
    }

        const adjustRequestNounTimeout = setTimeout(()=>{
            setRequestNoun(`Posts/ByMatch?match=${searchMatch}`)
        }, 500)

        return () => clearTimeout(adjustRequestNounTimeout)
    }, [searchMatch])

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
        if(popupsObj.wasErrorShowed && popupsObj.errorMessage != undefined 
            && !checkIfAnyIsTrue(popupsObj.visiblePopus)) return true
        return false
    }
    
    
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