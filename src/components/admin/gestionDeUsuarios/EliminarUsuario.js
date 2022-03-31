import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteUser } from '../../../actions/auth'
import { useForm } from '../../../hooks/useForm'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'




export const EliminarUsuario = () => {
const dispatch = useDispatch();
const initialState = {
  userId: 'wd23hyujkl987bbnrfpq2dcv'
}



const [deleteFormValues, setDeleteForm] = useForm({initialState});

const {userId} = deleteFormValues;


const handdleDeleteForm = (e) => {
    e.preventDefault();
    
  //DISPARAMOS LA ACCION PARA ELIMINAR EL USUARIO
  dispatch(startDeleteUser(userId))


}

  return (
    <>
    <div className='container.fluid'>
        <NavbarAdmin/>
        <h1>ELIMINANDO USUARIO</h1>

        <div className='container form-group formAdmin row justify-content-center'>
          <form onSubmit={handdleDeleteForm}>
            <label>Introduzca ID de Usuario</label>
            <input className='form-control' minLength='24'  maxLength={24} value={userId} type='text' name='userId' placeholder='Id de Usuario' onChange={setDeleteForm}/>



          </form>
            <button type='submit ' className='btn btn-lg btn-danger text-center btnAdmin' >Eliminar Usuario</button>
          
        <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
        </div>


    </div>
    
    </>



    )
}
