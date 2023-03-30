import React from "react";
import profilePic from "Assets/profilePicture.jpg"
import UserPostsShortcut from "./UserPostsShortcut/UserPostsShortcut";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import useWindowSize from "Hooks/UseWindowSize";
import * as Popups from "Components/Popups/Popups"
import { useAxiosRequest } from "Hooks/UseAxiosRequest";


export default function ProfilePageContent({profile}){

    const windowSize = useWindowSize()
    const couldBeMobile = windowSize.width < 1024

    const [passwordChangeClicked, setPasswordChangeClicked] = React.useState(false)
    const [passwordChangeData, setPasswordChangeData] = React.useState({
        currentPassword : "",
        newPassword : "",
        confirmNewPassword : ""
    })

    
    const [shouldChangePassword, setShouldChangePassword] = React.useState(false)
    const statefulRun = {
        state : shouldChangePassword,
        modifierFunc : setShouldChangePassword
    }
    const [response, popupsObj] = useAxiosRequest("Users", "post", statefulRun, passwordChangeData)

    const handlePassworChangeForm = (event) => {
        setPasswordChangeData(()=>{
            return {...passwordChangeData, [event.target.name] : event.target.value}
        })
    }

    const handleChangePasswordClick = () => {
        if(!passwordChangeClicked){
            setPasswordChangeClicked(true)
            return
        }
        
        setShouldChangePassword(true)
        setPasswordChangeClicked(false)
    }

    const buttonColorStyle = {"backgroundColor" : `${passwordChangeClicked || !couldBeMobile ? "red" : "green"}`}

    return(
        <main>
            <section className="flex flex-col tablet:flex-row justify-center items-center gap-2">
                <div>
                    <p className="text-sm tablet:text-base laptop:text-xl text-center">{profile.username}</p>
                    <p className="text-xxs tablet:text-xs text-center text-blue-600">{profile.role}</p>
                    <img src={profilePic} alt="Your profile" className="object-cover my-2 m-auto h-36 tablet:h-60 laptop:h-72"/>
                </div>
                {!couldBeMobile && <UserPostsShortcut posts={profile.userPosts}/>}
            </section>
            <section className="flex flex-col justify-center items-center gap-2">
                <button style={buttonColorStyle} 
                    className="my-1 px-1.5 hover:bg-gray-500 text-xs tablet:text-sm
                    w-20 tablet:w-52 tablet:block m-auto" onClick={handleChangePasswordClick}>Change password</button>
                {(passwordChangeClicked || !couldBeMobile) && <ChangePasswordForm handleChange={handlePassworChangeForm} data={passwordChangeData}/>}
                {couldBeMobile && <UserPostsShortcut posts={profile.userPosts}/>}
            </section>
        </main>
    )
}