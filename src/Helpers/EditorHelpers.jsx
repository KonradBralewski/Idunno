import { stateToHTML } from "draft-js-export-html"
import  parse  from "html-react-parser"
import { sanitize } from "dompurify"


export function getEditorText(state){
    return stateToHTML(state.getCurrentContent())
}

export function rawHtmlToJSX(rawHtml){                          // sanitizing HTML to secure it from XSS attacks.
    return parse(sanitize(rawHtml))
}

export function rawHtmlToJSXWithClass(rawHtml, name, className){
    return parse(sanitize(rawHtml), {
        replace : domNode => {
            if(domNode.type === "tag" && domNode.name === name){
                if(domNode.attribs){
                    domNode.attribs.class = className
                }
                else{
                    domNode.attribs = {
                        class : className
                    }
                }
            }
        }
    })
}

export function getEditorTextLength(state){
    return state.getCurrentContent().getPlainText("\u0001").length
}

