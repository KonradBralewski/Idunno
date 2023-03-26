import { receiveErrorMessage } from "Helpers/JsonHelpers"
import React from "react"
import ExpPost from "./ExpPost"

export default function ExpPostsErrorHandler({error}){
    const message = error.response != undefined ? receiveErrorMessage(error) : "SERVER ERROR"
    return(
        <div className="w-screen flex justify-center items-center mt-36 tablet:mt-20">
            <ExpPost title={`<p style='color:red';><b><em>${message}</em></b></p>`} 
            description={`<p style='color:red';><b><em>${message}</em></b></p>`}/>
        </div>
    )
}