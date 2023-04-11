import React from 'react';
import '../stylesheets/botones.css'

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button 
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClick}>
        {texto}
    </button>
  )
}

export default Boton;