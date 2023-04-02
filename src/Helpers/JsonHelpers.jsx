export function checkIfAnyIsTrue(givenObject){
    for(var key in givenObject){
        if(givenObject[key] === true){
            return true
        }
    }
    return false
}

export function receiveErrorMessage(error){
    if(error != undefined){
        const res = error.response
        if(res != undefined && res.data != ""){
            return res.data
        }
        else 
            return error.message
    }

    return "Server error."
}

export function receiveErrorCode(error){
    if(error != undefined && error.response != undefined){
        return error.response.status
    }

    return 500 // INTERNAL SERVER ERROR
}