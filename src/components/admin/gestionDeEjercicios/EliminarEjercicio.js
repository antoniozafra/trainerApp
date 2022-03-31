import React from 'react';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';


export const EliminarEjercicio = () => {
  return (
<>
<div className='container.fluid'>
    <NavbarAdmin/>

    <h1> EliminarEjercicio</h1>

    <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>


</div>


</>

    
  )
}
