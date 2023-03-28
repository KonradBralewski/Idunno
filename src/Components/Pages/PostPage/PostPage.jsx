import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosRequest } from "Hooks/RequestHook";
import PostPageContent from "./PostPageContent/PostPageContent";
import * as Popups from "Components/Popups/Popups"
import { receiveErrorMessage } from "Helpers/JsonHelpers";

export default function PostPage(){
    
    const {postId} = useParams()

    const [wasRun, setWasRun] = React.useState(true)

    const statefulRun = {
        state : wasRun,
        modifierFunc : setWasRun
    }
    
    const [response, popupsObj] = useAxiosRequest(`Posts/${postId}`, "get", statefulRun)

    const post = response != undefined ? {...response.key, postAuthor : response.value} : undefined

    const postWhileError = popupsObj.errorMessage != undefined && {
        postTitle : `<p style='color:red;'>${receiveErrorMessage(popupsObj.errorMessage)}</p>`,
        postDescription : `<p style='color:red;'>${receiveErrorMessage(popupsObj.errorMessage)}</p>`,
        postDate : new Date().toLocaleString().replaceAll(".", "-").replace(",", "").slice(0, -3), // get string -> format to database convention ->
                                                                                                  // remove unwanted chars -> remove seconds
    }

    function renderPostPage(){
        if(post != undefined){
            return(
                <section className="flex flex-col">
                    <PostPageContent post={post}/>
                    <button className="bg-blue-500 rounded-sm px-0.5' border-red-900 border-x-2 border-y-2 
                        text-center text-xs xs:text-sm w-24 xs:w-32 tablet:w-44 self-center">Ask an author</button>
                </section>
            )
        }

        if(popupsObj.errorMessage != undefined && popupsObj.wasErrorShowed){
            return <PostPageContent post={postWhileError}/>
        }
    }

    return(
        <main className="flex flex-col w-screen h-screen justify-center -mt-12">
            <div>
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            {renderPostPage()}
        </main>
    )
}