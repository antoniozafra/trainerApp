import React from 'react';
import { useDispatch } from 'react-redux';
import { startEditDieta } from '../../../actions/admin';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const ModificarDieta = () => {

  
  const dispatch = useDispatch();

  //  DECLARAMOS EL INITIALSTATE
  const initialState = {
    idRutina: '1',
    lunes : '2',
    martes : '3',
    miercoles : '4',
    jueves : '5',
    viernes : '6',
    sabado : '7',
    domingo : '8',
    optionalDescription: '9'
  };
  
  //HCEMOS USO DEL USEFORM
  const [editDietaForm, setEditDietaForm] = useForm(initialState);
  
  const {idDieta, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription} = editDietaForm;
  
  
  //CREAMOS LA FUNCION PARA CREAR LA RUTINA
  const handdleSubmitForm = (e) => {
    e.preventDefault();
  
    //DISPARAMOS LA ACCION PARA  CREAR LA RUTINA
    dispatch(startEditDieta(idDieta, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription));
    
  }
  
  
  
    return (
          <>
          
            <NavbarAdmin/>
              {/* FORMULARIO PARA CREAR USUARIO */}
              <div className=' form-group formAdmin row justify-content-center'>
  
              <h1 className='text-center '>EDITAR DIETA</h1>
  
              <form onSubmit={handdleSubmitForm} >
                  {/* ID DEL USUARIO */}
                  <label>ID Dieta:</label>
                  <input type="text" name='idDieta' className="form-control" minLength='24' maxLength='24' placeholder='Inrtroduzca el ID de la dieta:' value={idDieta}  onChange={setEditDietaForm} required/>
  
                  {/* /* LUNES */}
                  <label>Lunes:</label>
                  <textarea type="text-area" name='lunes'   className='form-control' required  value={lunes} onChange={setEditDietaForm}/>
  
                  {/* /* MARTES */}
                  <label>Martes:</label>
                  <textarea type="text-area" name='martes'   className='form-control' required value={martes} onChange={setEditDietaForm}/>
  
                  {/* /* Miercoles */}
                  <label>Miercoles:</label>
                  <textarea type="text-area" name='miercoles'   className='form-control' required  value={miercoles} onChange={setEditDietaForm}/>
  
                  {/* /* JUEVES */}
                  <label>Jueves:</label>
                  <textarea type="text-area" name='jueves'   className='form-control' required value={jueves} onChange={setEditDietaForm} />
  
                  {/* /* VIERNES */}
                  <label>Viernes:</label>
                  <textarea type="text-area" name='viernes'   className='form-control' required  value={viernes} onChange={setEditDietaForm}/>
  
                  {/* /* SABADO */}
                  <label>Sabado:</label>
                  <textarea type="text-area" name='sabado'   className='form-control' required value={sabado} onChange={setEditDietaForm}/>
  
                  {/* /* DOMINGO */}
                  <label>Domingo:</label>
                  <textarea type="text-area" name='domingo'   className='form-control' required value={domingo} onChange={setEditDietaForm}/>
  
                  {/* /* Datos Adicionales */}
                  <label>Informacion Opcional:</label>
                  <textarea type="text-area" name='optionalDescription'   className='form-control' value={optionalDescription} onChange={setEditDietaForm}  />
  
  
                  
                 
  
  
                  <button type='submit ' className='btn btn-lg btn-success text-center' >Editar Dieta</button>
              </form>
  
  
              <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
              </div>
          </>
  
  
  
    )
  }
  