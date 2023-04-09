import React from "react";
import profilePic from "Assets/profilePicture.jpg"
import UserPostsShortcut from "./UserPostsShortcut/UserPostsShortcut";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import useWindowSize from "Hooks/UseWindowSize";
import { useNavigate } from "react-router-dom";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";


export default function ProfilePageContent({profile, userPosts}){

    const windowSize = useWindowSize()
    const couldBeMobile = windowSize.width < 1024
    const nav = useNavigate()


    return(
        <main>
            <section className="flex flex-col tablet:flex-row justify-center items-center gap-2">
                <div>
                    <p className="text-sm tablet:text-base laptop:text-xl text-center">{profile.username}</p>
                    <p className="text-xxs tablet:text-xs text-center text-blue-600">{profile.role}</p>
                    <img src={profilePic} alt="Your profile" className="object-cover my-2 m-auto h-36 tablet:h-60 laptop:h-72"/>
                </div>
                {!couldBeMobile && <UserPostsShortcut posts={userPosts}/>}
            </section>
            <section className="flex flex-col justify-center items-center gap-2">
                <ChangePasswordForm/>
                {couldBeMobile && <UserPostsShortcut posts={userPosts}/>}
            </section>
        </main>
    )
}