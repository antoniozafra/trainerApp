import React from 'react';
import { useForm } from '../../hooks/useForm';
import { NavbarLogin } from '../ui/NavbarLogin';
import {useDispatch} from 'react-redux'
import { startLogin } from '../../actions/auth';




export const LoginScreen = () => {


//DEFINIMOS EL DISPARADOR DE ACCIONES DE NUESTRA APLICACION
const dispatch = useDispatch();



  //VALORES DEL FORMULARIO INICIALES APLICACION EN EL USEFORM
  const [formLoginValues, handleLoginInputChange] = useForm({
    email: 'trainerapp@gmail.com',
    pass : '123456'
  });

  //DESESTRUCTURAMOS LAS VARIABLES DEL FORMULARIO DESDE USEFORM
  const {email,pass} = formLoginValues;
  


  //DEFINIMOS LA FUNCION PARA DISPARAR EL INICIO DE SESION
  const handdleLogin = (e) => {

    //PARA NO RECARGAR EL NAVEGADOR AL HACER CLICK EN EL FORMULARIO
    e.preventDefault();


    //DISPARAMOS LA ACCION STARTLOGIN
    dispatch(startLogin(email, pass));

  };






  return (
    <>
    <NavbarLogin/>


    {/*RETORNAMOS EL FORMULARIO HTML DE INICIO DE SESION*/}
      <div className='container text-center  loginScreen'>
        <h1>Bienvenido a TrainerApp</h1>

      {/*FORMULARIO DE INICIO DE SESION */}

      <form onSubmit={handdleLogin}>
        {/*INPUT USUARIO */}
        <div className='form-group'>
          <input placeholder='Ingrese Usuario' name='email' type="email" value={email} onChange={handleLoginInputChange}/>

        </div>

        {/*INPUT CONTRASEÑA */}
        <div className='form-group'>
          <input placeholder='Ingrese Contraseña' name='pass' type="password" value={pass} onChange={handleLoginInputChange}/>

        </div>

        {/*BOTÓN PARA ENVIAR EL FORMULARIO */}
        <input type="submit" className="btn btn-primary" value="Iniciar Sesión"/>
        
      </form> 

    {/*AÑADIMOS EL ENLACE PARA INICIAR SESION COMO ADMINISTRADOS */}
      <a href='/admin'>
      <p>Iniciar sesión como Administrador</p>      
      </a>




      </div>

      </>



  )
}
