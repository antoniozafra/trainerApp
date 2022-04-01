import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux';
import { startDeleteReceta } from '../../../actions/admin';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const EliminarReceta = () => {

  const dispatch = useDispatch();
  const initialState = {
    idReceta: 'wd23hyujkl987bbnrfpq2dcv'
  }
  
  
  
  const [deleteFormValues, setDeleteForm] = useForm({initialState});
  
  const {idReceta} = deleteFormValues;
  
  
  const handdleDeleteForm = (e) => {
      e.preventDefault();
      
      console.log(idReceta)
    //DISPARAMOS LA ACCION PARA ELIMINAR EL USUARIO
    dispatch(startDeleteReceta(idReceta))
  
  
  }
  
    return (
      <>
      <div className='container.fluid'>
          <NavbarAdmin/>
          <div className='container form-group formAdmin row justify-content-center'>
          <h1 className='text-center'>ELIMINAR RECETA</h1>
  
            <form onSubmit={handdleDeleteForm}>
              <label>Introduzca ID de la Receta: </label>
              <input className='form-control' minLength='24'  maxLength='24' value={idReceta} type='text' name='idReceta' placeholder='Id de la Receta' onChange={setDeleteForm} required/>
  
  
  
              <button type='submit ' className='btn btn-lg btn-danger text-center btnAdmin' >Eliminar Receta</button>
            </form>
            
          <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
          </div>
  
  
      </div>
      
      </>
  
  
  
      )
  }
  