import "index.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Popups from "Components/Popups/Popups"
import {checkIfAnyIsTrue} from "Helpers/JsonHelpers"
import { useAxiosRequest } from "Hooks/RequestHook";
import Warning from "Components/Warning/Warning"
import cfg from "configuration.json"

export default function LoginForm(){

    const [loginData, setLoginData] = React.useState({username : "admin", password : "admin"})
    const [action, setAction] = React.useState("Login") // default Login
    const [shouldTryToLogin, setShouldTryToLogin] = React.useState(false)

    const navigate = useNavigate()

    const statefulRun = {
        state : shouldTryToLogin,
        modifierFunc : setShouldTryToLogin
    }

    const [response, popupsObj] = useAxiosRequest(action, "post", statefulRun, loginData)
    function handleChange(event){
        setLoginData(prevData => {
            let old = {...prevData, [event.target.name] : event.target.value}
            return old
        })
    }

    function handleButtonPress(event){
        event.preventDefault()
        setAction(event.target.name === "loginBtn" ? "Login" : "Register")
        setShouldTryToLogin(true)
    }
    const validationSettings = cfg.Constants.LoginValidation

    const usernameWarning = loginData.username.length < validationSettings.UsernameCharsMin
    const passwordWarning = loginData.password.length < validationSettings.PasswordCharsMin

    React.useEffect(()=>{
        if(response != undefined) navigate("/Homeboard")    // It means request was succesful and is saved in state.
    }, [response])

    return (
        <div>
            <div className="absolute m-auto left-0 right-0 top-36">
                <Popups.Popups popupsObj={popupsObj}/>
            </div>
            <div className="absolute flex flex-col my-1 h-96">    
            <h1 className="text-white self-center text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl overflow-hidden">Idunno</h1>
                <form className="flex flex-col items-center justify-items-center w-screen gap-1">
                    <Warning visible={usernameWarning} message="Login should've at least 4 characters entered."/>
                    <input type="text" placeholder="Username" onChange={handleChange}
                    value={loginData.username} name="username" className="text-sm text-center w-24 laptop:w-36"></input>
                    <Warning visible={passwordWarning} message="Password should've at least 4 characters entered."/>
                    <input type="password" placeholder="Password" onChange={handleChange} value={loginData.password}
                    name="password" className="text-sm text-center w-24 laptop:w-36"></input>
                    <div className="grid grid-cols-2 gap-1">
                        <button name="registerBtn" className="bg-green-400 my-1 px-1.5 hover:bg-gray-500 font-medium text-sm laptop:text-base disabled:bg-red-800"
                        onClick={handleButtonPress} type="button" disabled={checkIfAnyIsTrue(popupsObj.visiblePopups)}>Register</button>
                        <button name="loginBtn" className="bg-green-400 my-1 px-1.5 hover:bg-gray-500 font-medium text-sm laptop:text-base disabled:bg-red-800" 
                        onClick={handleButtonPress} type="submit" disabled={checkIfAnyIsTrue(popupsObj.visiblePopups)}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}