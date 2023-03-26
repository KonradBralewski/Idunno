import errorImg from "Assets/error.png"

export const popupsObject = {
    visiblePopups: {
        waitingPopup : false, errorPopup : false
    },
    errorMessage : undefined,
    wasErrorShowed : false
}

export const Popups = ({popupsObj}) => {
    return(
        (popupsObj.visiblePopups.waitingPopup && <WaitingPopup/>) ||
        (popupsObj.visiblePopups.errorPopup && <ErrorPopup msg = {popupsObj.errorMessage}/>)
    )
}

const WaitingPopup = () => {
    return(
        <div className="opacity-90 flex items-center justify-center h-40">
            <div className="w-14 h-14 animate-spin-slow border-orange-500 border-4 rounded-full border-dotted"></div>
        </div>
    )
}

const ErrorPopup = ({msg}) => {
    const message = () => {
        if(msg != undefined){
            const response = msg.response
            if(response != undefined){
                return response.data
            }
        }
        return "Server error."
    }

    return(
        <div className="bg-black/80 flex flex-col items-center justify-center 
                    text-white min-w-36 min-h-36 tablet:min-w-48 tablet:min-h-48 py-2">
            <p className="">{message()}</p>
            <img src={errorImg} className="w-28 h-28"/>
        </div>
    )
}

function switchPopup(modifierFunc, popupName, value, ms = 0){
    function change(){
        modifierFunc(prevPopups => {
            let prev = prevPopups.visiblePopups
            prev = {...prev, [popupName] : value}
            return {visiblePopups : prev, errorMessage : prevPopups.errorMessage}
        })
    }
    
    if(ms != 0){
        setTimeout(()=>change(), ms)
    }else{
        change()
    }
}

export function startWaiting(modifierFunc, ms = 0){
    switchPopup(modifierFunc, "waitingPopup", true, ms)
}
export function endWaiting(modifierFunc, ms){
    switchPopup(modifierFunc, "waitingPopup", false, ms)
}

export function startError(modifierFunc, ms){
    switchPopup(modifierFunc, "errorPopup", true, ms)
    setTimeout(()=>{setErrorWasShowed(modifierFunc, false)}, ms)
}

export function endError(modifierFunc, ms){
    switchPopup(modifierFunc, "errorPopup", false, ms)
    setTimeout(()=>{setErrorWasShowed(modifierFunc, true)}, ms)
}

export function setErrorMessage(modifierFunc, message){
    modifierFunc(prevPopups => {
        return {...prevPopups, errorMessage : message}
    })
}

export function setErrorWasShowed(modifierFunc, boolean){
    modifierFunc(prevPopups => {
        return {...prevPopups, wasErrorShowed : boolean}
    })
}

