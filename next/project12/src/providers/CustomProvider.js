import React, {useContext, createContext, useState} from 'react'

// Crear un contexto personalizado
const CustomContext = createContext();

// Crear un proveedor personalziado
function CustomProvider({children}) {

  const [customState, setCustomState] = useState("Hello World!");

  return (
    <CustomContext.Provider value={{customState, setCustomState}}>
        {children}
    </CustomContext.Provider>
  )
}

export {CustomProvider, CustomContext}