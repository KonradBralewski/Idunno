import profilePic from "Assets/profilePicture.jpg"

export default function ProfilePage(){
    return (
        <main>
            <p className="m-auto text-sm tablet:text-base laptop:text-xl text-center">acc name</p>
            <img src={profilePic} alt="Your profile" className="object-cover my-2 m-auto h-36 tablet:h-60 laptop:h-72"/>
            {<p>your posts</p>}
        </main>
    )
}