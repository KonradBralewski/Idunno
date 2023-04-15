import React from "react";
import { Editor, EditorState} from "draft-js";
import cfg from "configuration";
import { getEditorTextLength } from "Helpers/EditorHelpers";


export default function SendNewMessage(){

    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty())

    const handleMaxLenght = () => {
        if(getEditorTextLength(editorState) > cfg.Constants.InputBoxValidation.MaxNewMessageLength - 1){
             return "handled"
        }
     }

    return(
        <section className="mt-auto flex flex-row max-h-12">
            <div className="bg-white m-0.5 w-4/5">
                <Editor editorState={editorState} onChange={setEditorState} 
                handleBeforeInput={handleMaxLenght} handlePastedText={handleMaxLenght}/>
            </div>
            <button className="bg-black text-white rounded-md text-xs p-0.5 w-16 m-1 tablet:m-auto">Send</button>
        </section>
    )
}