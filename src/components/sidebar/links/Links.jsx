import React from 'react'
import {motion} from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.01,
      type: 'spring',
      stiffness: 2000
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -100,
    opacity: 0
  },
}

const Links = () => {
  const items = ['Home', 'Services', 'Projects', 'Contact', 'About'];
  return (
    <div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1, x:20}} whileTap={{scale: 0.95, x:0}}>
          {item}
        </motion.a>
      ))}
    </div>
  )
}

export default Links
