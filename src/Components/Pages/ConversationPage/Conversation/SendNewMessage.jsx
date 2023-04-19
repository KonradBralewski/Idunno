import React from "react";
import { Editor, EditorState, RichUtils} from "draft-js";
import cfg from "configuration";
import { getEditorTextLength } from "Helpers/EditorHelpers";
import draftStyles from "draftStyles"
import { useParams } from "react-router-dom";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import { getEditorText } from "Helpers/EditorHelpers";

export default function SendNewMessage(){

    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty())

    const handleMaxLenght = () => {
        if(getEditorTextLength(editorState) > cfg.Constants.InputBoxValidation.MaxNewMessageLength - 1){
             return "handled"
        }
     }

     const {userId} = useParams()

     const [shouldSend, setShouldSend] = React.useState(false)

     const statefulRun = {
        state : shouldSend,
        modifierFunc : setShouldSend
    }

    const messageRequestBody = {
        receiverId : userId,
        msg : getEditorText(editorState)
    }

    const [response] = useAxiosRequest("Messages", "post", statefulRun, messageRequestBody)

    const handleSendButton = () => {
        if (userId === undefined) return

        if(getEditorTextLength(editorState) < 1) return

        setShouldSend(true)
    }

    return(
        <section className="mt-auto flex flex-row max-h-12">
            <div className="bg-white m-0.5 w-4/5">
                <Editor editorState={editorState} onChange={setEditorState} 
                handleBeforeInput={handleMaxLenght} handlePastedText={handleMaxLenght}
                customStyleMap={draftStyles}
                />
            </div>
            <button className="bg-black text-white rounded-md text-xs
             p-0.5 w-16 m-1 tablet:m-auto" onClick={handleSendButton}>Send</button>
        </section>
    )
}