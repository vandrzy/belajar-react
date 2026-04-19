import { useCallback, useMemo, useState } from "react"
import BlogCard from "./components/BlogCard"
import HiddenItems from "./components/HiddenItems";


function App() {

  const [count, setCount] = useState(0);
  const [isTrigger, setIsTrigger] = useState(false)

  const blog = {
    title: "Blog dummy",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
  }
  const result = useMemo(() => { // digunakan untuk menyimpan hasil perhitungan agar tidak dihitung ulang setiap render.
    return count *2;
  }, [count]);

  const setTrigger = useCallback(() => {
    setIsTrigger(prev => !prev)
  }, [])


  return (
    <>

    <BlogCard blog={blog} />

    <div>
      <button className="bg-sky-500 p-2 text-white" onClick={()=> setCount(prev => prev + 1)}>update</button>
      <h1>{result}</h1>
    </div>
    <HiddenItems isTrigger={isTrigger} handleTrigger={setTrigger}/>
      
    </>
  )
}

export default App
