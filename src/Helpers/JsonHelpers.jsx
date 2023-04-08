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

export function hasSameProps( firstObject, secondObject ) {
    if(firstObject === undefined || secondObject === undefined) return false
    
    var firstProperties = Object.keys( firstObject )
    var secondProperties = Object.keys( secondObject )

    if ( firstProperties.length == secondProperties.length ) {
        return firstProperties.every( function( prop ) {
          return secondProperties.indexOf( prop ) >= 0
        });
    }

    return false;
}