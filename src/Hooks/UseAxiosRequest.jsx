import { PopupsContext } from "Context/IdunnoContext"
import React from "react"
import cfg from "../configuration.js"
import axios from "axios"
import * as Popups from "Components/Popups/Popups"
import { useNavigate } from "react-router-dom"

export const useAxiosRequest = (noun, method, statefulRun = null, reqBody = null, autoError = true) => {

    const [data, setData] = React.useState(undefined)
    const [popupsObj, setPopupsObj] = React.useContext(PopupsContext)

    const serverSettings = cfg.Constants.API
    const popupsSettings = cfg.Constants.Popups
    
    React.useEffect(()=>{

        if(statefulRun != null){
            if(statefulRun.state === true){
                statefulRun.modifierFunc(false)
            }
            else{
                return
            }
        }

        if(noun === null || noun === undefined) return

        Popups.setErrorWasShowed(setPopupsObj, false)
        Popups.startWaiting(setPopupsObj)
        axios(serverSettings.API_SERVER + noun, {
            method: method, 
            data: reqBody,
            withCredentials : true,
            headers: {'Content-Type': 'application/json'}
        })
        .then(result => {
            setData(result.data) 
            Popups.setErrorMessage(setPopupsObj, undefined)
        }) // setData && "zero" error message.
        .catch(error => {
            Popups.setErrorMessage(setPopupsObj, error)
            if(autoError){
                Popups.endWaiting(setPopupsObj)
                Popups.startError(setPopupsObj)
                Popups.endError(setPopupsObj, popupsSettings.DefaultErrorVisibilityTime)
            }
        })
        .finally(()=>Popups.endWaiting(setPopupsObj))
    }, [noun, method, statefulRun, reqBody])

    return [data, popupsObj]
}