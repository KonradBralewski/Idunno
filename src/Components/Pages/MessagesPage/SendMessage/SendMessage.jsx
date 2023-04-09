import Search from "Components/Pages/HomeboardPage/Search/Search";
import useFilteredRequest from "Hooks/UseFilteredRequest";
import React from "react";
import UsersList from "./UsersList";

export default function SendMessage(){
    const [searchedText, setSearchedText] = React.useState("")
    const [users, popupsObj] = useFilteredRequest("Users", "Users/ByUsername?username", "get", searchedText, false, 500)

    return (
        <div className="overflow-hidden">
            <Search text={searchedText} textModifier={setSearchedText}
            customClass="my-2" placeholder="Search for user..."/>
            <UsersList users={users}/>
        </div>
    )
}