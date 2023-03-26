export function checkIfAnyIsTrue(givenObject){
    for(var key in givenObject){
        if(givenObject[key] === true){
            return true
        }
    }
    return false
}

export function receiveErrorMessage(error){
    const response = error.response

    if(response != undefined){
        return response.data
    }

    return undefined
}