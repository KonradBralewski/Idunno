import React from "react"

export default function Warning(props){
    return (
        <div>
            {props.visible && 
            <p className="text-red-600 text-xxs font-medium">{props.message}</p>}
        </div>
    )
}