import React from 'react'

/**
 *  Un componente de botón reutilizable
 * 
 * @component
 * @param {Object} props - las propiedades del componente.
 * @param {string} props.value - El texto que se muestra en el boton.
 * @param {Function} props.function - La funcion que se ejecutara al presionar el boton.
 * @returns {JSX.element} - el elemento de botón.
 */

function Button(props) {
  return (
    <>
        <button className='btn bg-black text-white mx-3' onClick={props.function}>{props.value}</button>
    </>
  )
}

export default Button