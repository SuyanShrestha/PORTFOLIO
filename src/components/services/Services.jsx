import React from 'react'
import {useRef} from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const variants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    initial1: {
        x: -500,
        opacity: 0
    },
    initial2: {
        x: -7500,
        opacity: 0
    },
    initial3:{
        y: -500,
        opacity: 0
    },
    animate: {
        x: 0,   
        y: 0,
        opacity: 1,
        scale: 1,

        transition: {
            duration: 1.15,
            staggerChildren: 0.5
        }
    }
}

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref,{ margin: "-100px" })
  return (
    <motion.div className='services' variants={variants} initial='initial1' ref={ref} animate={isInView &&'animate'} >

      <motion.div className="guffContainer" variants={variants} initial='initial1' ref={ref} animate={isInView &&'animate'} >
        <p>We make it bloom, We make it prettier
            <br />Your choice is our expertise
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants} initial='initial2' ref={ref} animate={isInView &&'animate'} >
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color: 'orange'}}>Convert</motion.b> your thoughts</h1>
        </div>
        <div className="title">
            <h1>Into <motion.b whileHover={{color: 'orange'}}>Products</motion.b></h1>
            <button>Our Services</button>
        </div>       
      </motion.div>

      <motion.div className="listContainer" variants={variants} initial='initial3' ref={ref} animate={isInView &&'animate'}  >
        <motion.div className="box" whileHover={{backgroundColor: '#f4ebd5', color: '#333'}}>
            <h2>Build full websites</h2>
            <p>Develop modern and responsive responsive websites that meet your visual allure!</p>
            <button>Explore!</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: '#f4ebd5', color: '#333'}}>
            <h2>E-commerce development</h2>
            <p>Create online stores and marketplaces that are secure, scalable and user-friendly</p>
            <button>Explore!</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: '#f4ebd5', color: '#333'}}>
            <h2>API Development</h2>
            <p>Create custom APIs that allow your businesses to integrate your services with other applications or platforms.</p>
            <button>Explore!</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: '#f4ebd5', color: '#333'}}>
            <h2>Data Visualization</h2>
            <p>So, you are a Youtuber and need someone to give you every statistics and data you need for your channel? Just hop in and we will get the work done.</p>
            <button>Explore!</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: '#f4ebd5', color: '#333'}}>
            <h2>Consulting and Technical Support</h2>
            <p>Help choose the right tech stack, optimize your web applications and resolve any technical issues.</p>
            <button>Explore!</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
