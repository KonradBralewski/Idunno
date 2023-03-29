import React from "react"
import { useNavigate } from "react-router-dom"
import * as Popups from "Components/Popups/Popups"
import Warning from "Components/Warning/Warning"
import PostTextEditor from "./Editors/PostTextEditor"
import PostPageContent from "../PostPage/PostPageContent/PostPageContent"
import { EditorState } from "draft-js"
import { getEditorText, getEditorTextLength } from "Helpers/EditorHelpers"
import { useAxiosRequest } from "Hooks/RequestHook"



export default function AddPage(){
    
    const [titleEditorState, setTitleEditorState] = React.useState(() => EditorState.createEmpty())
    const [descriptionEditorState, setDescriptionEditorState] = React.useState(() => EditorState.createEmpty())

    const addRequestPayload = {
        postTitle : getEditorText(titleEditorState),
        postDescription : getEditorText(descriptionEditorState),
        imagePath : "foo_bar"
    }

    const [shouldAdd, setShouldAdd] = React.useState(false)
    const [tries, setTries] = React.useState(0)

    const statefulRun = {
        state : shouldAdd,
        modifierFunc : setShouldAdd
    }

    const [response, popupsObj] = useAxiosRequest("Posts", "post", statefulRun, addRequestPayload)

    React.useEffect(()=>{
        if(response != undefined && popupsObj.errorMessage === undefined)
            navigate("/Homeboard")
    }, [response, popupsObj.errorMessage])
    
    const editors = {
        titleEditor :{
            state : titleEditorState,
            setState : setTitleEditorState
        },
        descriptionEditor : {
            state : descriptionEditorState,
            setState : setDescriptionEditorState
        }
    }

    const navigate = useNavigate()

    function checkFormRequirements(){
        if(getEditorTextLength(titleEditorState) >= 3 &&
        getEditorTextLength(descriptionEditorState) >= 10) return true

        return false
    }

    function handleSubmit(event){
        setTries(prevCount => prevCount + 1)

        event.preventDefault()

        if(checkFormRequirements()){
            setShouldAdd(true)
        }
    }

    function warningVisibility(state, min){
        if(getEditorTextLength(state) < min && tries > 0){
            return true
        }

        return false
    }

    const previewPost = {
        postTitle : getEditorTextLength(titleEditorState) > 0 ?
                             getEditorText(titleEditorState) : 
                                    "<p style='color:grey;'>There should be a title.</p>",
        postDescription : getEditorTextLength(descriptionEditorState) > 0 ? 
                            getEditorText(descriptionEditorState) : 
                                    "<p style='color:grey;'>There should be a description.</p>",
        postDate : new Date().toLocaleString().replaceAll(".", "-").replace(",", "").slice(0, -3), // get string -> format to database convention ->
                                                                                                  // remove unwanted chars -> remove seconds
        postAuthor : "You"
    }

    function responsivePopups() {
        const whileWaiting = "absolute m-auto left-0 right-0 top-60 tablet:top-80 laptop:top-2/3"
        const whileError = "absolute m-auto left-0 right-0 top-32 tablet:top-36"

        if(popupsObj.visiblePopups.errorPopup){
            return whileError
        }
        
        return whileWaiting
    }

    return (
        <div className="flex flex-col overflow-x-hidden w-screen h-screen justify-center -my-12 tablet:-my-14">
            <div className={responsivePopups()}>
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            <form className="flex flex-col items-center justify-items-center w-screen gap-1" onSubmit={handleSubmit}>
                <Warning visible={warningVisibility(titleEditorState, 3)} message="Title should be at least 3 characters long."/>
                <Warning visible={warningVisibility(descriptionEditorState, 10)} 
                    message="Description should be at least 10 characters long."/>
                <PostTextEditor editors={editors}/>
                <button className="bg-green-400 my-1 px-1.5 hover:bg-gray-500 text-sm laptop:text-base">Add</button>
                <section className="mt-3">
                    <PostPageContent post={previewPost}/>
                </section>
                
            </form>
        </div>
    )
}