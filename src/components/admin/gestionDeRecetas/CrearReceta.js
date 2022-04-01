import React from 'react'
import { useDispatch } from 'react-redux';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';
import {useForm} from '../../../hooks/useForm';
import { startCreateReceta } from '../../../actions/admin';


export const CrearReceta = () => {
  const dispatch = useDispatch();

  //  DECLARAMOS EL INITIALSTATE
  const initialState = {
    nombre: 'Leche con galletas',
    tipoReceta : 'Desayuno',
    pasos : '1',
    tiempoEstimado : '30',
    nivelDificultad : 'Facil',
    ingredientes: 'agua, sal',
    imagen : 'www.youtube.com',
  };
  
  //HCEMOS USO DEL USEFORM
  const [createRecetaForm, setCreateRecetaForm] = useForm(initialState);
  
  const {nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad, ingredientes, imagen} = createRecetaForm;
  
  
  //CREAMOS LA FUNCION PARA CREAR LA RUTINA
  const handdleSubmitForm = (e) => {
    e.preventDefault();
    console.log(nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen)
  
    //DISPARAMOS LA ACCION PARA  CREAR LA RUTINA
    dispatch(startCreateReceta(nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen));
  }
  
  
  
    return (
          <>
          
            <NavbarAdmin/>
              {/* FORMULARIO PARA CREAR EJERCICIO */}
              <div className=' form-group formAdmin row justify-content-center'>
  
              <h1 className='text-center '>Crear Reecta</h1>
  
              <form onSubmit={handdleSubmitForm} >

                  {/* NOMBRE DEL EJERCICIO */}
                  <label>Nombre de la Receta:</label>
                  <input type="text" name='nombre' className="form-control" placeholder='Inrtroduzca el nombre de la Receta:' value={nombre} required onChange={setCreateRecetaForm}/>
  
                  {/* ZONA MUSCULAR */}
                  <label>Tipo de Receta:</label>
                  <select name="tipoReceta"  value={tipoReceta} onChange={setCreateRecetaForm}>

                    <option  name="tipoReceta" value='desayuno' onChange={setCreateRecetaForm} defaultValue >Desayuno</option>
                    <option  name="tipoReceta" value='almuerzo' onChange={setCreateRecetaForm} >Almuerzo</option>
                    <option  name="tipoReceta" value='merienda' onChange={setCreateRecetaForm}>Merienda</option>
                    <option  name="tipoReceta" value='cena' onChange={setCreateRecetaForm}>Cena</option>
                    
                  </select><br></br>
  
                  {/* PASOS */}
                  <label>Pasos :</label>
                  <textarea type="text-area" name='pasos'  className='form-control' required value={pasos} onChange={setCreateRecetaForm}/>
  
                   {/* PASOS DEL EJERCICIO */}
                   <label>Tiempo Estimado en minutos :</label>
                  <input type="number" name='tiempoEstimado'  className='form-control' required value={tiempoEstimado} onChange={setCreateRecetaForm}/>


                  {/* /* NIVEL DE DIFICULTAD */}
                   <label>Nivel de Dificultad:</label>
                  <select name="nivelDificultad"  value={nivelDificultad} onChange={setCreateRecetaForm}>

                    <option name="nivelDificultad"  value="facil" onChange={setCreateRecetaForm} defaultValue>Facil</option>
                    <option name="nivelDificultad"  value="intermedio" onChange={setCreateRecetaForm}>Intermedio</option>
                    <option name="nivelDificultad"  value="dificil" onChange={setCreateRecetaForm}>Dificil</option>
                    
                  </select><br></br>
                  

                    {/* IMAGEN O ENLAZE DEL EJERCICIO (TODO) */}
                    <label>ingredientes</label>
                  <input type="text" name='ingredientes'   className='form-control' required value={ingredientes} onChange={setCreateRecetaForm} />
  

  
                  {/* IMAGEN O ENLAZE DEL EJERCICIO (TODO) */}
                  <label>Imagen:</label>
                  <input type="text" name='imagen'   className='form-control' required value={imagen} onChange={setCreateRecetaForm} />
  
                   
                 
  
  
                  <button type='submit ' className='btn btn-lg btn-success text-center' >Crear Receta</button>
              </form>
  
  
              <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
              </div>
          </>
  
  
  
    )
  }