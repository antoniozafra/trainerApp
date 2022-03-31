import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeleteDieta } from '../../../actions/admin';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';



export const EliminarDieta = () => {

   
  const dispatch = useDispatch();

  const initialState = {
      idDieta: ''
  }

  const [deleteDietaValues, setDeleteDietaValues] = useForm(initialState);

  const {idDieta} = deleteDietaValues;  

  const handdleSubmitForm = (e) => {
      e.preventDefault();
      //DISPARAMOS LA ACCION PARA COMENZAR A ELIMINAR LA RUTINA
      dispatch(startDeleteDieta(idDieta));


  }






  return (
      <>
      <div className='container.fluid'>
          <NavbarAdmin/>
  
          <div className='container form-group formAdmin row justify-content-center'>
          <h1 className='text-center'>ELIMINAR DIETA</h1>
            <form onSubmit={handdleSubmitForm} >
              <label>Introduzca ID de Dieta: 
              </label>
              <input className='form-control' minLength={24}  maxLength='24' value={idDieta} type='text' name='idDieta' placeholder='Id de Dieta' onChange={setDeleteDietaValues} required/>
  
  
  
              <button type='submit ' className='btn btn-lg btn-danger text-center btnAdmin' >Eliminar Rutina</button>
            </form>
            
          <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
          </div>
  
  
      </div>
      
      </>
  
  
  
      )
}
