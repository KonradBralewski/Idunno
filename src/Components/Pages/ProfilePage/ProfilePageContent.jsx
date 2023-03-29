import React from "react";
import profilePic from "Assets/profilePicture.jpg"
import UserPostsShortcut from "./UserPostsShortcut/UserPostsShortcut";

export default function ProfilePageContent({profile}){
    return(
        <main className="flex flex-col tablet:flex-row">
            <section>
                <p className="text-sm tablet:text-base laptop:text-xl text-center">{profile.username}</p>
                <p className="text-xxs tablet:text-xs text-center text-blue-600">{profile.role}</p>
                <img src={profilePic} alt="Your profile" className="object-cover my-2 m-auto h-36 tablet:h-60 laptop:h-72"/>
                <button className="bg-red-500 my-1 px-1.5 hover:bg-gray-500 text-xs tablet:text-sm laptop:text-base w-20 tablet:w-24">Change password</button>   
            </section>
            <UserPostsShortcut posts={profile.userPosts}/>
        </main>
    )
}