import React from 'react'
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';


export const ModificarReceta = () => {
  return (
        <>
        
          <NavbarAdmin/>
          <div className='container-fluid'>
            <h1>MODIFICANDO RECETA</h1>



            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>

        </div>
        
        </>



  )
}
