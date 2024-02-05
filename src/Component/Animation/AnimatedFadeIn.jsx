import React from "react";
import { motion } from "framer-motion";

const AnimatedFadeIn = ({ children }) => {
   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.3 }}
         variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
         }}
         className="w-full h-full"
      >  
         {children}
      </motion.div>
   );
}

export default AnimatedFadeIn;