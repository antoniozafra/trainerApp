import React from 'react';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';


export const ModificarEjercicio = () => {
  return (
<>
<div className='container.fluid'>
    <NavbarAdmin/>

    <h1> MODIFICANDO EJERCICIOS</h1>

    <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>


</div>


</>

    
  )
}
