import MessagesBox from "./MessagesBox/MessagesBox";

export default function MessagesPage(){
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <p className="absolute top-24 tablet:top-20">Your Messages</p>
            <MessagesBox/>
        </div>
    )
}