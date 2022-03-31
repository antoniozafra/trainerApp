import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { startLogout, startLogoutAdmin } from '../../actions/auth';



export const NavbarAdmin = () => {

  //GUARDAMOS EN UNA VARIABLE EL NOMBRE DEL ADMINISTRADOR, EXTRAIDO DEL STATE
  const name = useSelector(state => state.auth.name);

  //IMPORTAMOS EL USEDISPATCH DE REDUX
  const dispatch = useDispatch();

  //FUNCION PARA DISPARAR EL STARLOGOUT
  const handdleLogout = () => {

    dispatch(startLogout());
  



    //DISPARAMOS LA ACCION STARTLOGOUT

  }


    //RETORNAMOS EL CONTENIDO DE LA BARRA DEL USUARIO
  return (

    
    <div className='navbar navbar-dark bg-dark mb-4 '>
        <span className='navbar-brand m-1'>Administrador, {name}</span>


     


        <button className='btn btn-outline-danger'>
            <i className='fas fa-sign-out-alt'></i>
             <span className='m-3' onClick={handdleLogout}> Cerrar Sesión</span>
             </button>
        


    </div>
  )
}
