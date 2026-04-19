import { useCallback, useState } from "react"
import HiddenItems from "../components/HiddenItems"
import Navbar from "../components/Navbar"


const About = () => {

    const [isTrigger, setIsTrigger] = useState(false)
  const setTrigger = useCallback(() => {
    setIsTrigger(prev => !prev)
  }, [])


  return (
    <div>
        <Navbar/>
            <p>ini about</p>
    <HiddenItems isTrigger={isTrigger} handleTrigger={setTrigger}/>
      
    </div>
  )
}

export default About;