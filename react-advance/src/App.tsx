import {Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";

const Home = lazy(() => (import("./pages/Home")))
const About = lazy(() => (import("./pages/About")))
const Contact = lazy(() => (import("./pages/Contact")))



function App() {

  return (
      <Suspense fallback={<div>loading ....</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>

  )
}

export default App
