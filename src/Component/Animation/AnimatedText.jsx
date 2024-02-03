import React from 'react';
import { motion } from 'framer-motion';
const AnimatedText = ({ text }) => {
   const textArray = text.split('');
   return (
      textArray.map((el, i) => {
         if (el === ' ') {
            return <span key={i}>&nbsp;</span>;
         }
        return <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               duration: 0.25,
               delay: i / 10,
            }}
            className='font-lato'
            key={i}
         >
            {el}
         </motion.span>;
      })

   );
};

export default AnimatedText;
