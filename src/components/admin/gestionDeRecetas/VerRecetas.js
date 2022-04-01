import React from 'react'
import { useDispatch } from 'react-redux';
import { recetasStartLoading } from '../../../actions/admin';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const VerRecetas = () => {
  //IMPORTAMOS EL DISPATCH
  const dispatch = useDispatch();

 

  //FUNCION PARA OBTENER LOS USUARIOS
  const handdleGetRecetas = async () => {
   //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
   const recetas =  await dispatch(recetasStartLoading());
   const table = document.getElementById("table");
   let data = '';
  
   if(recetas.length === 0){
     return document.getElementById("table").innerHTML = "<p>No hay recetas disponibles</p>";
   }
  
   for (let i = 0; i < recetas.length; i++) {
     const receta = recetas[i];
      data = data + JSON.stringify(receta)+'<br></br>';
     
     table.innerHTML = JSON.stringify(data)+ `Total de Recetas: ${recetas.length}` ;
   }
   
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