import React from "react";
import profilePic from "Assets/profilePicture.jpg"
import UserPostsShortcut from "./UserPostsShortcut/UserPostsShortcut";

export default function ProfilePageContent({profile}){
    return(
        <main>
            <p className="m-auto text-sm tablet:text-base laptop:text-xl text-center">{profile.username}</p>
            <p className="m-auto text-xxs tablet:text-xs text-center text-blue-600">{profile.role}</p>
            <img src={profilePic} alt="Your profile" className="object-cover my-2 m-auto h-36 tablet:h-60 laptop:h-72"/>
            <UserPostsShortcut posts={profile.userPosts}/>
        </main>
    )
}