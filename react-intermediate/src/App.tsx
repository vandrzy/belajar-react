import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

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
    </div>
  )
}

export default App
