import React from 'react'

/**
 *  Un componente de botón reutilizable
 * 
 * @param {Object} props - las propiedades del componente.
 * @param {string} props.value - El texto que se muestra en el boton.
 * @param {Function} props.function - La funcion que se ejecutara al presionar el boton.
 */

function Button(props) {
  return (
    <div className=''>
        <button className='px-8 py-3 bg-black text-white mx-3 hover:bg-slate-50 hover:text-black hover:border-black hover:border-2' onClick={props?.function}>{props.value}</button>
    </div>
  )
}


export default Button