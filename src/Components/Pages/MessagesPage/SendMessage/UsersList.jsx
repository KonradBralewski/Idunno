import React from "react";
import UserSingleEntry from "./UserSingleEntry";

export default function UsersList({users}){

    const mapUsers = () => {
        if(users === undefined) return

        const mappedUsers = users.map(user => {
            return <UserSingleEntry key={user.userId} user={user}/>
        })

        return mappedUsers
    }
    
    return (
        <div>
            {mapUsers()}
        </div>
    )
}