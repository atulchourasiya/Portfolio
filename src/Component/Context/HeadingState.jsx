import React, { useState } from 'react'
import { createContext } from 'react'

export const HeadingContext = createContext();
export const HeadingState = (props) => {
  const [heading , setHeading] = useState("DEVATUL");
  return (
    <HeadingContext.Provider value={{heading , setHeading}}>
      {props.children}
    </HeadingContext.Provider>
  )
}

