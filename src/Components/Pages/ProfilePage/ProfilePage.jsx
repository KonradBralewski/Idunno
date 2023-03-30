import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import * as Popups from "Components/Popups/Popups"
import ProfilePageContent from "./ProfilePageContent";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ProfilePage(){

    const [profile, popupsObj] = useAxiosRequest("Users/CurrentUser", "get")
    const nav = useNavigate()

    React.useEffect(()=>{
        if(profile === undefined && popupsObj.errorMessage != undefined && popupsObj.wasErrorShowed)
            nav("/Idunno")
    }, [profile, popupsObj])
    
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
           {profile != undefined && <ProfilePageContent profile={profile}/>}
        </main>
    )
}