import Warning from "Components/Warning/Warning";
import { useAxiosRequest } from "Hooks/UseAxiosRequest";
import React from "react";
import cfg from "configuration.js"
import { useNavigate } from "react-router-dom";

export default function ChangePasswordForm(){
    const nav = useNavigate()

    const defaultWarnings = {
        currentPassword : {
            visible : false,
            message : undefined
        },
        newPassword : {
            visible : false,
            message : undefined
        },
        confirmNewPassword : {
            visible : false,
            message : undefined
        }
    }

    const [passwordChangeData, setPasswordChangeData] = React.useState({
        data : {
            currentPassword : "",
            newPassword : "",
            confirmNewPassword : "",
        },
        buttonClicked : undefined
    })

    const [warnings, setWarnings] = React.useState(defaultWarnings)

    const isAnythingVisible = () => {
        for(const [key, value] of Object.entries(warnings)){
            if(value.visible === true) {
                return true
            }
        }
    }

    React.useEffect(()=>{
        const warningRoutine = () => {
            setValidatedData(false)
            changeButtonState(false)
        }

        if(passwordChangeData.buttonClicked){
            const data = passwordChangeData.data
            let lengthWarning = false

            for(const [key, value] of Object.entries(data)){
                if(value.length < cfg.Constants.LoginValidation.PasswordCharsMin){
                    changeMessage(key, "Password should contain at least 4 characters.")
                    changeVisibility(key, true)
                    lengthWarning = true
                }
            }

            if(lengthWarning) {
                warningRoutine()
                return
            }
            else{
                setWarnings(defaultWarnings)
            }

            if(data.newPassword != data.confirmNewPassword){
                changeMessage("newPassword", "Passwords must match each other")
                changeVisibility("newPassword", true)
                changeMessage("confirmNewPassword", "Passwords must match each other")
                changeVisibility("confirmNewPassword", true)

                warningRoutine()
                return
            }

            setWarnings(defaultWarnings)
            setValidatedData(true)
        }

    }, [passwordChangeData])
    
    const changeMessage = (name, message) => {
        setWarnings(prevWarnings => {
            const prev = prevWarnings
            return {...prev, [name] : {visible : prev[name].visible, message : message}}
        })
    }
    const changeVisibility = (name, visibility) => {
        setWarnings(prevWarnings => {
            const prev = prevWarnings
            return {...prev, [name] : {message : prev[name].message, visible : visibility}}
        })
    }

    const changeButtonState = (value) => {
        setPasswordChangeData(prev => {return {...prev, buttonClicked : value}})
    }


    const [validatedData, setValidatedData] = React.useState(false)
    const statefulRun = {
        state : validatedData,
        modifierFunc : setValidatedData
    }

    const handleChange = (event) => {
        setPasswordChangeData(prevPwdChangeData => {
            let prevData = prevPwdChangeData.data
            prevData = {...prevData, [event.target.name] : event.target.value}
            return {...prevPwdChangeData, data : prevData}
        })
    }

    const [response, popupsObj] = useAxiosRequest("Users/CurrentUser", "post", statefulRun, passwordChangeData.data)
    if(response != undefined){
        nav("/Login")
    }

    return (
        <div>
            <button className="my-1 px-1.5 bg-red-600 hover:bg-gray-500 text-xs tablet:text-sm
             text-center w-32 tablet:w-36 laptop:w-44" onClick={()=>changeButtonState(true)}>Change password</button>
            <div className="flex flex-col w-54 border-2 border-black">
                <Warning visible={warnings.currentPassword.visible} message={warnings.currentPassword.message}/>
                <input type="password" placeholder="Current Password" onChange={handleChange}
                        value={passwordChangeData.data.currentPassword} name="currentPassword" 
                        className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
                <Warning visible={warnings.newPassword.visible} message={warnings.newPassword.message}/>
                <input type="password" placeholder="New Password" onChange={handleChange}
                        value={passwordChangeData.data.newPassword} name="newPassword" 
                        className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
                <Warning visible={warnings.confirmNewPassword.visible} message={warnings.confirmNewPassword.message}/>
                <input type="password" placeholder="Confirm Password" onChange={handleChange}
                        value={passwordChangeData.data.confirmNewPassword} name="confirmNewPassword" 
                        className="text-xs tablet:text-sm text-center w-32 tablet:w-36 laptop:w-44"></input>
            </div>
        </div>
    )
}