import React, { useState } from 'react';
import { createContext } from 'react';

export const LoadingContext = createContext();
export const LoadingState = (props) => {
   const [loading, setLoading] = useState(true);
   return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
         {props.children}
      </LoadingContext.Provider>
   );
}

