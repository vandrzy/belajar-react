import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import { UserProvider } from './contexts/UserContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogForm from './pages/blogForm'
import ToDoForm from './pages/todoForm'
import ImageAnime from './components/ImageAnime'

const App = () => {
  return (
    <div>

      <div>ini app</div>
      <Card>
        <Card.Footer>Ini footer</Card.Footer>
        jnac
        <Card.Header>Ini Header</Card.Header>
        <Card.Body>Ini body</Card.Body>
      </Card>

      <UserProvider>
        <Navbar />
        <Footer />
      </UserProvider>
      <BlogForm />

      <ToDoForm />
      <ImageAnime />
    </div>

  )
}

export default App
