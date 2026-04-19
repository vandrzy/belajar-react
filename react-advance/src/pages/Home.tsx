
import BlogCard from "../components/BlogCard"
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
        </div>
    )

}

export default Home;