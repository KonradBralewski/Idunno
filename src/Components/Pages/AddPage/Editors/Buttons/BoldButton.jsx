import React from "react"
import { RichUtils } from "draft-js"

export default function BoldButton({editorState, setEditorState}){
    function boldText(e){
        e.preventDefault()
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
    }
    return (
        <div className="my-1 bg-gray-800 text-red-400 text-center rounded font-bold px-1 ml-1 text-xxs flex">
            <button type="button" onMouseDown={boldText}>Bold</button>
        </div>
    )
}