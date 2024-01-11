import React from 'react'
import {useRef} from 'react'
import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion';

const Parallax = ({type}) => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const moveBack = useTransform(scrollYProgress, [0,1], ['0%', '40%'])
  const moveText = useTransform(scrollYProgress, [0,1], ['0%', '200%'])

  return (
    <div className='parallax' ref={ref}
    style={{background:type==='services' ? 'linear-gradient(180deg, #111132, #0c0c1d)' : 'linear-gradient(180deg, #111132, #505064)'}}>
      <motion.h1 style={{y:moveText}}>{type==='services' ? 'Our Services' : 'Our Projects'}</motion.h1>

      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:moveBack,
        backgroundImage: `url(${type==='services' ? './planets.png' : './sun.png'})`
      }} className="planets"></motion.div>
      <motion.div style={{x:moveText}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
