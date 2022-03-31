import React, { useEffect } from 'react'
import { startChecking, startLogout } from '../../actions/auth'
import {useDispatch, useSelector} from 'react-redux'








export const Navbar = () => {

  const name = useSelector (state => state.auth.name)
  //IMPORTAMOS EL USEDISPATCH DE REDUC
  const dispatch = useDispatch();


//CREAMOS LA FUNCION PARA CERRAR SESION
 const handdleLogout = () => {
  
  //DISPARAMOS EL STARTLOGOUT
  dispatch(startLogout());

}



useEffect(() => {
        
  dispatch( startChecking() );

}, [dispatch])





    //RETORNAMOS EL CONTENIDO DE LA BARRA DEL USUARIO
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand m-2'>Bienvenido, {name}</span>

        <button className='btn btn-outline-danger m-2' onClick={handdleLogout}>
            <i className='fas fa-sign-out-alt'></i>
             <span> Cerrar Sesión</span>
             </button>
        


    </div>
  )
}
