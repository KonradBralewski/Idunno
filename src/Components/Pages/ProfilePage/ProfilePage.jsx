import { useAxiosRequest } from "Hooks/RequestHook";
import * as Popups from "Components/Popups/Popups"
import ProfilePageContent from "./ProfilePageContent";

export default function ProfilePage(){

    const [profile, popupsObj] = useAxiosRequest("Users/CurrentUser", "get")
    
    return (
        <main>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
           {profile != undefined && <ProfilePageContent profile={profile}/>}
        </main>
    )
}