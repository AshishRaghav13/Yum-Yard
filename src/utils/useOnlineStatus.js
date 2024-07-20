import { useState } from "react";

const useOnlineStatus = ()=>{
    const [status,setStatus] = useState(true);
    window.addEventListener("offline",()=>{
         setStatus(false);
    })

    window.addEventListener("online",()=>{
        setStatus(true);
    })
    return status;
}

export default useOnlineStatus;