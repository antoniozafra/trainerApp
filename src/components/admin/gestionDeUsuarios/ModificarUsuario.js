import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startEditUser } from '../../../actions/auth'

import { useForm } from '../../../hooks/useForm'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'



export const ModificarUsuario = () => {


  //IMPORTAMOS EL DISPATCH
  const dispatch = useDispatch();

  const initialState = {
    userId : '',
    username: '',
    user: '',
    pass1: '',
    pass2 : ''

    };

    const [editUserForm, setEditFormValues, ] = useForm({ initialState})
    //DESESTRUCTURAMOS LAS VARIABLES DEL FORMULARIO
    const {userId, username, user, pass1, pass2 } = editUserForm;



const handdleEditForm = (e) => {
  e.preventDefault();
  console.log('enviamos')

    //COMPROBAMOS QUE LAS CONTRASEÑAS SON CORRECTAS
    if(pass1 !== pass2){
      return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
  }

  //DISPARAMOS LA ACCION PARA MODIFICAR EL USUARIO
  dispatch(startEditUser(userId, user, username, pass1))
}







  return (

    <>
        <div className='container.fluid'>
            <NavbarAdmin/>
            
        <div className='container form-group formAdmin row justify-content-center'>
          <h1 className='text-center'>MODIFICAR USUARIO</h1>

          <form onSubmit={handdleEditForm}>
            <label>Introduzca ID de Usuario</label>
            <input className='form-control' minLength='24' maxLength='24'  type='text' name='userId' placeholder='Id de Usuario' value={userId} required onChange={setEditFormValues}/>

            <label>Nuevo Nombre:</label>
            <input className='form-control'    type='text' name='username' placeholder='Nombre' value={username}  onChange={setEditFormValues} required/>

            <label>Nuevo Usuario:</label>
            <input className='form-control'    type='text' name='user' placeholder='Usuario' value={user} required onChange={setEditFormValues}/>

            
            <label>Nueva Contraseña:</label>
            <input className='form-control'    type='password' name='pass1' placeholder='Contraseña' value={pass1} required onChange={setEditFormValues}/>

            <label>Repita la contraseña:</label>
            <input className='form-control'    type='password' name='pass2' value={pass2} placeholder='Repita la contraseña' required onChange={setEditFormValues}/>



            <button type='submit 'className='btn btn-success btnAdmin ' >ACTUALIZAR CAMBIOS</button>
          </form>
          
        <BackButton path={'/adminPanel'}  title={'Volver al Panel de Administrador'} />
        </div>



        </div>
    
    </>



  )
}
