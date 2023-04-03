import React from "react";
import SingleMessage from "./SingleMessage";



export default function MessagesBox(){
    return (
        <main className="-mt-32">
        <SingleMessage author="You" date="2k20"message="test"/>
        <SingleMessage author="You" date="2k20"message="lol"/>
        <SingleMessage author="You" date="2k20"message="lol"/>
        <SingleMessage author="You" date="2k20"message="lol"/>
        <SingleMessage author="You" date="2k20"message="lol"/>
        </main>
    )
}