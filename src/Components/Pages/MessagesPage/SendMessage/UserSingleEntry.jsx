import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserSingleEntry({user}){
    const nav = useNavigate()

    const returnStyledRole = () =>{
        if(user === undefined) return {}

        const role = user.role

        let roleColor

        if(role === "User"){
            roleColor="green"
        }
        if(role ==="Admin"){
            roleColor="red"
        }

        return {color:roleColor}
    }

    return (
        <div className="flex flex-row hover:font-bold border border-black p-1 bg-gradient-to-br 
        from-green-300 to-green-900" onClick={()=>{nav(`/Conversation/${user.userId}`)}}>
            <p style={returnStyledRole()} className="text-xxs tablet:text-xs">{user.role}</p>
            <p className="m-auto text-xxs tablet:text-xs">{user.username}</p>
        </div>
    )
}