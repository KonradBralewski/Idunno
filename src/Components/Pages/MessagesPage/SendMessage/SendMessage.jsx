import Search from "Components/Pages/HomeboardPage/Search/Search";
import useFilteredRequest from "Hooks/UseFilteredRequest";
import React from "react";

export default function SendMessage(){
    const [searchedText, setSearchedText] = React.useState("")
    const [users, popupsObj] = useFilteredRequest("Users", "Users/ByMatch&match", "get", searchedText, false)
    
    return (
        <Search text={searchedText} textModifier={setSearchedText}
        customClass="mt-2" placeholder="Search for user..."/>
    )
}