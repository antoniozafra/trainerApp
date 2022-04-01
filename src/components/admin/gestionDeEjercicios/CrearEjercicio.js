import React from 'react';
import { useDispatch } from 'react-redux';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';
import {useForm} from '../../../hooks/useForm';
import { startcreateEjercicio } from '../../../actions/admin';




export const CrearEjercicio = () => {
  const dispatch = useDispatch();

  //  DECLARAMOS EL INITIALSTATE
  const initialState = {
    nombre: 'Press de Banca',
    zonaMuscular : 'piernas',
    pasos : '3',
    nivelDificultad : 'Facil',
    imagen : 'www.youtube.com',
  };
  
  //HCEMOS USO DEL USEFORM
  const [createExerciseForm, setCreateExerciseForm] = useForm(initialState);
  
  const {nombre,zonaMuscular, pasos, nivelDificultad, imagen} = createExerciseForm;
  
  
  //CREAMOS LA FUNCION PARA CREAR LA RUTINA
  const handdleSubmitForm = (e) => {
    e.preventDefault();
  
    //DISPARAMOS LA ACCION PARA  CREAR LA RUTINA
    dispatch(startcreateEjercicio(nombre,zonaMuscular, pasos, nivelDificultad, imagen));
  }
  
  
  
    return (
          <>
          
            <NavbarAdmin/>
              {/* FORMULARIO PARA CREAR EJERCICIO */}
              <div className=' form-group formAdmin row justify-content-center'>
  
              <h1 className='text-center '>Crear Ejercicio</h1>
  
              <form onSubmit={handdleSubmitForm} >

                  {/* NOMBRE DEL EJERCICIO */}
                  <label>Nombre del Ejercicio:</label>
                  <input type="text" name='nombre' className="form-control" placeholder='Inrtroduzca el nombre del Ejercicio:' value={nombre} required onChange={setCreateExerciseForm}/>
  
                  {/* ZONA MUSCULAR */}
                  <label>Zona Muscular:</label>
                  <select name="zonaMuscular"  value={zonaMuscular} onChange={setCreateExerciseForm}>

                    <option  name="zonaMuscular" value='piernas' onChange={setCreateExerciseForm} defaultValue >Piernas</option>
                    <option  name="zonaMuscular" value='hombros' onChange={setCreateExerciseForm} >Hombros</option>
                    <option  name="zonaMuscular" value='brazos' onChange={setCreateExerciseForm}>Brazos</option>
                    <option  name="zonaMuscular" value='pectoral' onChange={setCreateExerciseForm}>Pectoral</option>
                    <option  name="zonaMuscular" value='espalda' onChange={setCreateExerciseForm}>Espalda</option>
                    <option  name="zonaMuscular" value='abdomen' onChange={setCreateExerciseForm}>Abdomen</option>

                  </select><br></br>
  
                  {/* PASOS DEL EJERCICIO */}
                  <label>Pasos :</label>
                  <textarea type="text-area" name='pasos'  className='form-control' required value={pasos} onChange={setCreateExerciseForm}/>
  
                  {/* /* NIVEL DE DIFICULTAD */}
                   <label>Nivel de Dificultad:</label>
                  <select name="nivelDificultad"  value={nivelDificultad} onChange={setCreateExerciseForm}>

                    <option name="nivelDificultad"  value="facil" onChange={setCreateExerciseForm} defaultValue>Facil</option>
                    <option name="nivelDificultad"  value="intermedio" onChange={setCreateExerciseForm}>Intermedio</option>
                    <option name="nivelDificultad"  value="dificil" onChange={setCreateExerciseForm}>Dificil</option>
                    
                  </select><br></br>
                  

  
                  {/* IMAGEN O ENLAZE DEL EJERCICIO (TODO) */}
                  <label>Imagen:</label>
                  <input type="text" name='imagen'   className='form-control' required value={imagen} onChange={setCreateExerciseForm} />
  
                   
                 
  
  
                  <button type='submit ' className='btn btn-lg btn-success text-center' >Crear Ejercicio</button>
              </form>
  
  
              <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
              </div>
          </>
  
  
  
    )
  }