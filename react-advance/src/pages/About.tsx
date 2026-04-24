import { useCallback, useState } from "react"
import HiddenItems from "../components/HiddenItems"
import Navbar from "../components/Navbar"
import ErrorTrigger from "../components/ErrorTrigger"
import ErrorBoundary from "../components/ErrorBoundary"
import ImageCard from "../components/ImageCard"
import useAnime from "../hooks/useAnime"


const About = () => {

    const [isTrigger, setIsTrigger] = useState(false)
  const setTrigger = useCallback(() => {
    setIsTrigger(prev => !prev)
  }, [])

  const {data, isError, isLoading, error} = useAnime()


  return (
    <div>
        <Navbar/>
        <ErrorBoundary>
          <ErrorTrigger/>
        </ErrorBoundary> 
            <p>ini about</p>
    <HiddenItems isTrigger={isTrigger} handleTrigger={setTrigger}/>
    {isLoading && <p>Loading ....</p>}
            {isError && <p>Error : {error?.name}</p>}
            {!isLoading && !isError && data && <div>
                <p>Page: {data.pageNumber}</p>
                <p>Total Page: {data.totalPage}</p>
                {data.items.map(anime => (
                    <ImageCard anime={anime} key={anime.id} />
                ))}
                </div>}
      
    </div>
  )
}

export default About;