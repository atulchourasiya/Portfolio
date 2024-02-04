import React, { useState } from 'react';
import { createContext } from 'react';

export const ModelContext = createContext();
export const ModelState = (props) => {
   const [visible, setVisible] = useState(false);
   return (
      <ModelContext.Provider value={{ visible, setVisible }}>
         {props.children}
      </ModelContext.Provider>
   );
}

