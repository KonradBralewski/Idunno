import React from "react"
import {Editor} from "draft-js"
import "draft-js/dist/Draft.css"
import "./PostTextEditor.css"
import BoldButton from "./Buttons/BoldButton"
import ItalicButton from "./Buttons/ItalicButton"
import { getEditorTextLength } from "Helpers/EditorHelpers"
import cfg from "configuration.js"

export default function PostTextEditor({editors}){

    const titleEditorState = editors.titleEditor.state
    const descriptionEditorState = editors.descriptionEditor.state
    const setTitleEditorState = editors.titleEditor.setState
    const setDescriptionEditorState = editors.descriptionEditor.setState

    const maxDescriptionLength = cfg.Constants.InputBoxValidation.MaxPostDescriptionLenght
    const maxTitleLenght = cfg.Constants.InputBoxValidation.MaxPostTitleLength

    const handleMaxLenghts = (maxLength, editorState) => {
       if(getEditorTextLength(editorState) > maxLength - 1){
            return "handled"
       }
    }

    return (
    <section className="w-44">
        <section className="bg-blue-500 border-black border-2 text-xxxs">
            <Editor editorState={titleEditorState} onChange={setTitleEditorState} placeholder="Title..."
            handleBeforeInput={()=>handleMaxLenghts(maxTitleLenght, titleEditorState)}
            handlePastedText={()=>handleMaxLenghts(maxTitleLenght, titleEditorState)}/>
        </section>
        <section className="bg-blue-500 border-black border-2 mt-0.5">
            <section className="flex flex-row gap-1 justify-center border-b-2 border-b-green-900">
                <BoldButton editorState = {descriptionEditorState} setEditorState={setDescriptionEditorState}/>
                <ItalicButton editorState = {descriptionEditorState} setEditorState={setDescriptionEditorState}/>
            </section>
            <Editor editorState={descriptionEditorState} onChange={setDescriptionEditorState}
            handleBeforeInput={()=>handleMaxLenghts(maxDescriptionLength, descriptionEditorState)}
            handlePastedText={()=>handleMaxLenghts(maxDescriptionLength, descriptionEditorState)} placeholder="Description..."/>
        </section>
    </section>
    )
}