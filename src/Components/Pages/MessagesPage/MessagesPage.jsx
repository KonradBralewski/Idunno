import MessagesBox from "./MessagesBox/MessagesBox";

export default function MessagesPage(){
    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <p className="text-sm tablet:text-lg">Your Messages</p>
            <MessagesBox/>
        </div>
    )
}