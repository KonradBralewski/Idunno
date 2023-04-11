import Search from "Components/Pages/HomeboardPage/Search/Search";
import useFilteredRequest from "Hooks/UseFilteredRequest";
import React from "react";
import UsersList from "./UsersList";

export default function SendMessage(){
    const [searchedText, setSearchedText] = React.useState("")
    const [users, popupsObj] = useFilteredRequest("Users", "Users/ByUsername?username", "get", searchedText, false, 500)

    const shouldShowUsers = () => {
        return users != undefined && searchedText.length > 0
    }

    const styleHiddenWhenNoUsers = shouldShowUsers() ? {} : {overflow : "hidden"}

    return (
        <div className="p-1 m-1" style={styleHiddenWhenNoUsers}>
            <Search text={searchedText} textModifier={setSearchedText}
            customClass="my-2" placeholder="Search for user..."/>
            {shouldShowUsers() && <UsersList users={users}/>}
        </div>
    )
}