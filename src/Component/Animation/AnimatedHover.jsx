import React from 'react'
import { motion } from 'framer-motion'
const AnimatedHover = ({children}) => {
  return (
    <motion.div whileHover={{scale : 0.9}} transition={{duration : 0.5 , ease :[.6 ,.5 ,.1 ,.9]}}>
      {children}
    </motion.div>
  )
}

export default AnimatedHover
