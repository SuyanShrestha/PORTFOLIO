import React from 'react';
import {motion} from 'framer-motion';
import {useState} from 'react';

const Test = () => {

    const [open, setOpen] = useState(false);

    const variants = {
        // visible: {opacity:1, x:500, transition:{type: 'spring', stiffness:100, damping: 10}},
        // visible: {opacity: 1, x: 300, transition:{staggerChildren: 0.8, type: 'spring', stiffness: 100, damping: 100}},
        visible: (i) => ({
          opacity: 1,
          x: 100,
          transition: {delay:i*0.5}
        }),
        hidden: {opacity:0, x:-700},
    }

    const items=['item1', 'item2', 'item3', 'item4'];

  return (
    <div className='course'>

      {/* <motion.div className="box" animate={{opacity: 1, scale:1, x:200, y: 300}} 
      initial={{opacity:0, scale: 0.5}}
      transition={{duration:2, delay:2}}
      whileTap={{scale:3}}
      drag
    >
      </motion.div> */}


      {/* <motion.div 
        className="box"
        variants={variants}
        // initial= 'hidden'
        // animate= 'visible' 
        transition={{duration:2}}
        animate={open ? 'visible':'hidden'}
      ></motion.div> */}

      {/* <motion.ul initial='hidden' animate='visible' variants={variants}>
        {items.map((item) => (
            <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul> */}

      <motion.ul initial='hidden' animate='visible' variants={variants}>
        {items.map((item, i) => (
            <motion.li variants={variants} key={item} custom={i}>
              {item}
            </motion.li>
        ))}
      </motion.ul>

      <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
    </div>
  )
}

export default Test
