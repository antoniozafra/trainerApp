import React from 'react'
import { useDispatch } from 'react-redux';
import { recetasStartLoading } from '../../../actions/admin';
import { generateTableRecetas } from '../../../hooks/generateTable';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const VerRecetas = () => {
  //IMPORTAMOS EL DISPATCH
  const dispatch = useDispatch();

 

  //FUNCION PARA OBTENER LOS USUARIOS
  const handdleGetRecetas = async () => {
   //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
   const data =   await dispatch(recetasStartLoading());
   const table = document.getElementById("table");
 
   const data_html =  generateTableRecetas(data);
 
   console.log(data_html);
   table.innerHTML = `<table>${data_html}</table><p>Total de Recetas: ${data.length}</p>`;
 
 
   
  }
  
  
   
   return (
     <>
         <NavbarAdmin/>
         <div className='row  formAdmin' id='table'>
  
         </div>
  
  
         <div className="form-group formAdmin  row justify-content-center" >
           
  
         <button className='btn btn-success btnAdmin '  onClick={handdleGetRecetas}>Obtener Recetas</button>
  
    
  
     
         <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />
           </div>
     </>
  
  
  
   
   )
   }