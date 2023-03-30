import React from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = React.useState({
        width : window.innerWidth,
        height : window.innerHeight
    })

    React.useEffect(()=>{
        const updateSize = () => {
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
            })
        }

        window.addEventListener("resize", updateSize)

        return ()=>window.removeEventListener("resize", updateSize)
    },[])

    return windowSize
}