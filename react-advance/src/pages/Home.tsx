
import BlogCard from "../components/BlogCard"
import ImageCard from "../components/ImageCard"
import MouseTracker from "../components/MouseTracker"
import Navbar from "../components/Navbar"
import useAnime from "../hooks/useAnime"


const Home = () => {
    const blog = {
        title: "Blog dummy",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
      }

    const {data, isError, isLoading, error} = useAnime()
    return (
        <div>
            <Navbar/>
            <p>ini home</p>
            
            <BlogCard blog={blog} />
            <MouseTracker>
                {({x, y}) => (<p>
                    Mouse pada ({x}, {y});
                </p>)}
            </MouseTracker>
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

export default Home;