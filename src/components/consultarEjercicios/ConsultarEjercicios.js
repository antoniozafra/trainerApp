import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ejerciciosStartLoading } from '../../actions/admin';
import { startChecking } from '../../actions/auth';
import { fetchSinToken } from '../../helpers/fetch'
import { generateTableEjercicios } from '../../hooks/generateTable';
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar';






const getExercises = async() => {
  const resp = await fetchSinToken('exercises/', {}, 'GET');
  console.log(resp)

}

export const ConsultarEjercicios =  () => {
const dispatch = useDispatch();


  

  useEffect(() => {
        
    dispatch( startChecking() );

}, [dispatch])


//FUNCION PARA OBTENER LOS USUARIOS
const handdleGetEjercicios = async () => {
  //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
  const data =   await dispatch(ejerciciosStartLoading());
  const table = document.getElementById("table");

  const data_html =  generateTableEjercicios(data);

  console.log(data_html);
  table.innerHTML = `<table>${data_html}</table><p>Total de Ejercicios: ${data.length}</p>`;


  
 }
 
 
  
  return (
    <>
        <Navbar/>
        <div className='row  formAdmin' id='table'>
 
        </div>
 
 
        <div className="form-group formAdmin  row justify-content-center" >
          
 
        <button className='btn btn-success btnAdmin '  onClick={handdleGetEjercicios}>Obtener Ejercicios</button>
 
   
 
    
        <BackButton path={'/'} title={'Volver atras'}  />
          </div>
    </>
 
 
 
  
  )
  }