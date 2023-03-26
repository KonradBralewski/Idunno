import React from "react";
import Search from "./Search/Search";
import HBExpPostsList from "./Post/HBExpPostsList";
import { AppContext } from "Context/IdunnoContext";

export default function Homeboard(){
    const[searchedText, setSearchedText] = React.useState([])

    return(
        <div className="w-screen h-full overflow-y-auto">
            <Search text={searchedText} textModifier={setSearchedText}/>
            <HBExpPostsList searchMatch={searchedText}/>
        </div>
    )
}