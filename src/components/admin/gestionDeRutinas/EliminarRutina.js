import React from 'react'
import { useDispatch } from 'react-redux'
import { routinesStartLoading, startDeleteRoutine } from '../../../actions/admin'
import { useForm } from '../../../hooks/useForm'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'



export const EliminarRutina = () => {
    
    const dispatch = useDispatch();

    const initialState = {
        idRutina: ''
    }

    const [deleteRoutineValues, setDeleteRoutineValues] = useForm(initialState);

    const {idRutina} = deleteRoutineValues;  

    const handdleSubmitForm = (e) => {
        e.preventDefault();
        //DISPARAMOS LA ACCION PARA COMENZAR A ELIMINAR LA RUTINA
        dispatch(startDeleteRoutine(idRutina));


    }





    

    return (
        <>
        <div className='container.fluid'>
            <NavbarAdmin/>
    
            <div className='container form-group formAdmin row justify-content-center'>
            <h1 className='text-center'>ELIMINAR RUTINA</h1>
              <form onSubmit={handdleSubmitForm} >
                <label>Introduzca ID de Rutina: 
                </label>
                <input className='form-control' minLength={24}  maxLength='24' value={idRutina} type='text' name='idRutina' placeholder='Id de Ruitna' onChange={setDeleteRoutineValues} required/>
    
    
    
                <button type='submit ' className='btn btn-lg btn-danger text-center btnAdmin' >Eliminar Rutina</button>
              </form>
              
            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
            </div>
    
    
        </div>
        
        </>
    
    
    
        )
}
