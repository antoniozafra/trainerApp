import React from 'react';

const year = new Date().getFullYear();

export const Footer = () => {
  //RETORNAMOS EL CONTENIDO DEL PIE DE PAGINA
  return (
    <div className='container.fluid text-center footer bg-light'>
      <p>TrainerApp &copy; {year} Todos los Derechos Reservados | Creado por Antonio Zafra</p>

    </div>


  )
}


