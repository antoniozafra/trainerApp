import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeleteEjercicio } from '../../../actions/admin';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const EliminarEjercicio = () => {


  const dispatch = useDispatch();
  const initialState = {
    idEjercicio: 'wd23hyujkl987bbnrfpq2dcv'
  }
  
  
  
  const [deleteFormValues, setDeleteForm] = useForm({initialState});
  
  const {idEjercicio} = deleteFormValues;
  
  
  const handdleDeleteForm = (e) => {
      e.preventDefault();
      
      console.log(idEjercicio)
    //DISPARAMOS LA ACCION PARA ELIMINAR EL USUARIO
    dispatch(startDeleteEjercicio(idEjercicio))
  
  
  }
  
    return (
      <>
      <div className='container.fluid'>
          <NavbarAdmin/>
          <div className='container form-group formAdmin row justify-content-center'>
          <h1 className='text-center'>ELIMINAR EJERCICIO</h1>
  
            <form onSubmit={handdleDeleteForm}>
              <label>Introduzca ID de Ejercicio: </label>
              <input className='form-control' minLength='24'  maxLength='24' value={idEjercicio} type='text' name='idEjercicio' placeholder='Id de Ejercicio' onChange={setDeleteForm}/>
  
  
  
              <button type='submit ' className='btn btn-lg btn-danger text-center btnAdmin' >Eliminar Ejercicio</button>
            </form>
            
          <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
          </div>
  
  
      </div>
      
      </>
  
  
  
      )
  }
  