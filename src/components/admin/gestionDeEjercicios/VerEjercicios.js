import React from 'react';
import { useDispatch } from 'react-redux';
import { ejerciciosStartLoading } from '../../../actions/admin';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';



export const VerEjercicios = () => {
 //IMPORTAMOS EL DISPATCH
 const dispatch = useDispatch();

 

//FUNCION PARA OBTENER LOS USUARIOS
const handdleGetEjercicios = async () => {
 //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
 const ejercicios =  await dispatch(ejerciciosStartLoading());
 const table = document.getElementById("table");
 let data = '';

 if(ejercicios.length === 0){
   return document.getElementById("table").innerHTML = "<p>No hay ejercicios disponibles</p>";
 }

 for (let i = 0; i < ejercicios.length; i++) {
   const ejercicio = ejercicios[i];
    data = data + JSON.stringify(ejercicio)+'<br></br>';
   
   table.innerHTML = JSON.stringify(data)+ `Total de Ejercicios: ${ejercicios.length}` ;
 }
 
}


 
 return (
   <>
       <NavbarAdmin/>
       <div className='row  formAdmin' id='table'>

       </div>


       <div className="form-group formAdmin  row justify-content-center" >
         

       <button className='btn btn-success btnAdmin '  onClick={handdleGetEjercicios}>Obtener Ejercicios</button>

  

   
       <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />
         </div>
   </>



 
 )
 }