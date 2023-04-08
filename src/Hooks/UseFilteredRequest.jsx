import React from "react";
import { useAxiosRequest } from "./UseAxiosRequest";
import cfg from "configuration.js"

export default function useFilteredRequest(defaultEndpoint, filteredEndpoint, method, searchMatch, shouldSendInstantly, delay){

    const [endpoint, setEndpoint] = React.useState(defaultEndpoint)
    const apiSettings = cfg.Constants.API

    const [canSend, setCanSend] = React.useState(shouldSendInstantly)

    const statefulRun = {
        state : canSend,
        modifierFunc : setCanSend
    }

    const [response, popupsObj] = useAxiosRequest(endpoint, method, shouldSendInstantly === false ? statefulRun : null)

    React.useEffect(()=>{
        if(searchMatch === undefined) return
        if(searchMatch.length == 0) {
            setEndpoint(defaultEndpoint)
            return
    }
        const adjustRequestNounTimeout = setTimeout(()=>{
            setEndpoint(`${filteredEndpoint}=${searchMatch}`)
            setCanSend(true)
        }, delay || apiSettings.DefaultFilteredSearchDelay)

        return () => clearTimeout(adjustRequestNounTimeout)
    }, [searchMatch])

    return [response, popupsObj]
}