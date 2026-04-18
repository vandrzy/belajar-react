import BlogCard from "./components/BlogCard"


function App() {

  const blog = {
    title: "Blog dummy",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
  }

  return (
    <>

    <BlogCard blog={blog} />
      
    </>
  )
}

export default App
