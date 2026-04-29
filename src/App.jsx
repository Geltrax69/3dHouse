import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Clients from './components/Clients'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Projects />
      <Clients />
      <WhyChooseUs />
      <Contact />
    </div>
  )
}

export default App
