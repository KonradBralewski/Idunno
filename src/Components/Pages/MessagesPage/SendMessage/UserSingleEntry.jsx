import React from "react";

export default function UserSingleEntry({user}){
    return (
        <div>
            <p>{user.username}</p>
            <p>{user.role}</p>
        </div>
    )
}