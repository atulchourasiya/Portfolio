import React from 'react'
import { motion } from 'framer-motion'
const AnimatedOnclick = ({children}) => {
  return (
     <motion.div whileTap={{ scale: 0.8 }} transition={{ duration: 0.5, ease: [.6, .5, .1, .9] }}>
        {children}
     </motion.div>
  )
}

export default AnimatedOnclick
