import React from "react"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Steps from "components/features/TwoColWithSteps"
import Footer from "components/footers/MiniCenteredFooter"
import About from "./About"
import {Router, Route, Link, Routes,} from 'react-router-dom'



function App() {
  return (

    <AnimationRevealPage>
      <Hero />
      <Steps/>
      <Footer/>
    </AnimationRevealPage>  
    
              )
}

export default App