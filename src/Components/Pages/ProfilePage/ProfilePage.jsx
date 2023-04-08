import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import ProfilePageContent from "./ProfilePageContent";
import { useNavigate } from "react-router-dom";
import React from "react";
import useShouldReturn from "Hooks/UseShouldReturn";

export default function ProfilePage(){

    const [profile, popupsObj] = useAxiosRequest("Users/CurrentUser", "get", undefined, undefined, false)
    const nav = useNavigate()

    useShouldReturn([profile, popupsObj])
    
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
           {profile != undefined && <ProfilePageContent profile={profile}/>}
        </main>
    )
}