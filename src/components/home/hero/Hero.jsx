import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useHistory } from 'react-router-dom';

const Hero = () => {

  const history = useHistory();

 const handleClick=()=>{
  history.push('/courses');
 }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h1>WELCOME TO NEXUS REALITY</h1>
            <Heading  title='Best Online Education Expertise' />
            <p>Precision crafted in every lesson, our surgery educational website stitches expertise seamlessly into your learning journey – where knowledge sharpens skills, and every click brings you closer to surgical mastery.</p>
            <div className='button'>
             
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
