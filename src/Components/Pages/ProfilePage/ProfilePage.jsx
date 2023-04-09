import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import ProfilePageContent from "./ProfilePageContent";
import { useNavigate } from "react-router-dom";
import React from "react";
import useShouldReturn from "Hooks/UseShouldReturn";

export default function ProfilePage(){

    const [response, popupsObj] = useAxiosRequest("Users/CurrentUser/Profile", "get", undefined, undefined, false)
    const nav = useNavigate()

    useShouldReturn([response, popupsObj])
    
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
           {response != undefined && <ProfilePageContent profile={response.key} userPosts = {response.value}/>}
        </main>
    )
}