import { useState } from "react"


const useTriggered = () => {
    const [triggered, setTriggered] = useState<boolean>(false);

    const updateTriggered = () => setTriggered(prev => !prev);

    return {triggered, updateTriggered};
}

export default useTriggered;