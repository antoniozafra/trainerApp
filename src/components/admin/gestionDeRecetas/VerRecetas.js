import React from 'react'
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';


export const VerRecetas = () => {
  return (
        <>
        
          <NavbarAdmin/>
          <div className='container-fluid'>
            <h1>VER receta</h1>



            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>

        </div>
        
        </>



  )
}
