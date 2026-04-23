
import BlogCard from "../components/BlogCard"
import MouseTracker from "../components/MouseTracker"
import Navbar from "../components/Navbar"


const Home = () => {
    const blog = {
        title: "Blog dummy",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
      }
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
        </div>
    )

}

export default Home;