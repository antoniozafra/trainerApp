import React from 'react';
import { useDispatch } from 'react-redux';
import { ejerciciosStartLoading } from '../../../actions/admin';
import { generateTableEjercicios } from '../../../hooks/generateTable';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';



export const VerEjercicios = () => {
 //IMPORTAMOS EL DISPATCH
 const dispatch = useDispatch();

 

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