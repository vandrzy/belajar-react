import { useCallback, useState } from "react"
import HiddenItems from "../components/HiddenItems"
import Navbar from "../components/Navbar"
import ErrorTrigger from "../components/ErrorTrigger"
import ErrorBoundary from "../components/ErrorBoundary"
import ImageCard from "../components/ImageCard"



const About = () => {

    const [isTrigger, setIsTrigger] = useState(false)
  const setTrigger = useCallback(() => {
    setIsTrigger(prev => !prev)
  }, [])

  // const {data, isError, isLoading, error} = useAnime()


  return (
    <div>
        <Navbar/>
        <ErrorBoundary>
          <ErrorTrigger/>
        </ErrorBoundary> 
            <p>ini about</p>
    <HiddenItems isTrigger={isTrigger} handleTrigger={setTrigger}/>
    
      
    </div>
  )
}

export default About;