import React from "react";
import * as Popups from "Components/Popups/Popups"

export const PopupsContext = React.createContext()

const AppContext = ({subComponents}) => {
    const [popupsObj, setPopupsObj] = React.useState(() => Popups.popupsObject)

    return (
        <PopupsContext.Provider value={[popupsObj, setPopupsObj]}>
            {subComponents}
        </PopupsContext.Provider>
    )}

export default AppContext