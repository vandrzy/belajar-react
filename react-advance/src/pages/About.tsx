import { useCallback, useEffect, useRef, useState } from "react"
import HiddenItems from "../components/HiddenItems"
import Navbar from "../components/Navbar"
import ErrorTrigger from "../components/ErrorTrigger"
import ErrorBoundary from "../components/ErrorBoundary"
import ImageCard from "../components/ImageCard"
import useInfinityAnime from "../hooks/useInfinityAnime"



const About = () => {

    const [isTrigger, setIsTrigger] = useState(false)
  const setTrigger = useCallback(() => {
    setIsTrigger(prev => !prev)
  }, [])

  // const {data, isError, isLoading, error} = useAnime()
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} = useInfinityAnime();
  const loaderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage){
          fetchNextPage()}
      },
      {threshold: 0.1}
    )
    const current = loaderRef.current;
    if (current){
      observer.observe(current);
    }
    return () => {
      if (current) observer.unobserve(current)
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])


  return (
    <div>
        <Navbar/>
        <ErrorBoundary>
          <ErrorTrigger/>
        </ErrorBoundary> 
            <p>ini about</p>
    <HiddenItems isTrigger={isTrigger} handleTrigger={setTrigger}/>
    {!isLoading && data && <div>
                {data.pages.map(page => page.items.map(item => (
                  <ImageCard anime={item} key={item.id} />
                )) )}
                <div ref={loaderRef}>
                  {isFetchingNextPage ? "load more": hasNextPage ? "scroll for more" : "no more data"}
                </div>
                </div>}
    
      
    </div>
  )
}

export default About;