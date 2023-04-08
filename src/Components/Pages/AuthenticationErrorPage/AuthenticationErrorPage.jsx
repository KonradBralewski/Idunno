import authImg from "Assets/auth.png"
import * as Popups from "Components/Popups/Popups"
import { useNavigate } from "react-router-dom";
import React from "react";
import cfg from "configuration.js"
import { PopupsContext } from "Context/IdunnoContext";

export default function AuthenticationErrorPage(){
    const nav = useNavigate()
    const [popupsObj, setPopupsObj] = React.useContext(PopupsContext)

    React.useEffect(()=>{
        Popups.endError(setPopupsObj)

        Popups.startWaiting(setPopupsObj)
        Popups.endWaiting(setPopupsObj, cfg.Constants.Popups.DefaultAuthErrorPageDelay)

        const deleyedRedirect = setTimeout(()=>{
            nav("/Login")
        }, cfg.Constants.Popups.DefaultAuthErrorPageDelay)

        return ()=>clearTimeout(deleyedRedirect)
    }, [])

    return (    
        <main className="w-screen h-96 flex flex-col items-center justify-center gap-3">
            <div className="absolute m-auto left-0 right-0 top-72">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            <img src={authImg} className="w-32"/>
            <p className="text-xs text-center">You are not authentication or your authentication time expired. Redirecting to login page.</p>
        </main>
    )
}