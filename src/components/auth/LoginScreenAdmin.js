import React from 'react'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../actions/admin'
import { useForm } from '../../hooks/useForm'

import { BackButton } from '../ui/BackButton'
import { NavbarLogin } from '../ui/NavbarLogin'


export const LoginScreenAdmin = () => {

//IMPORTAMOS EL USEDISPATCH
const dispatch = useDispatch();


  //DECLARAMOS EL ESTADO INICIAL DE NUESTRO FORMULARIO:
  const initialState = {
    user: 'root@root.com',
    pass: '123456'

  }


  //EXTRACCION DE LOS VALORES DEL FORMULARIO
  const [adminformValues, setAdminFormValues] = useForm(initialState);
  
  //ESTRAMOS LOS VALORES USUARIO Y CONTRASEÑA DEL FORMULARIO
  const {user, pass} = adminformValues;


   const handdleLogin =  (e) => {
     e.preventDefault();

     //DISPARAMOS LA ACCION DE INICIAR SESION ADMIM
     dispatch(adminLogin(user,pass));
     
    
  };

  return (
    <>

    <NavbarLogin/>

      {/* //RETORNAMOS EL FORMULARIO DE INICIO DE SESION como administrador */}
      <div className='container text-center loginScreen'>
        <h1>Administrador</h1>

      {/*FORMULARIO DE INICIO DE SESION COMO ADMINISTRADOR */}

      <form onSubmit={handdleLogin}>
        {/*INPUT USUARIO */}
        <div className='form-group'>
          <input placeholder='Ingrese Usuario' name='user' type="text" value={user}  onChange={setAdminFormValues}/>

        </div>

        {/*INPUT CONTRASEÑA */}
        <div className='form-group'>
          <input placeholder='Ingrese Contraseña' name='pass' type="password"  value={pass}  onChange={setAdminFormValues}/>

        </div>

        {/*BOTÓN PARA ENVIAR EL FORMULARIO */}
        <input type="submit" className="btn btn-primary" value='Iniciar Sesión ' />
        
      </form> 

      {/*ENLAZAMOS CON INICIAR SESION COMO USUARIO */}
      

      <BackButton path={'/login'} title={'Volver'}/>
    


      </div>

    </>
    )
}
