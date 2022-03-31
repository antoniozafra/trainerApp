import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import { routinesStartLoading } from '../../../actions/admin'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'



export const VerRutinas = () => {
 
   //IMPORTAMOS EL DISPATCH
   const dispatch = useDispatch();

   //EXTRAEMOS Y GUARDAMOS LOS USUARIOS DEL STATE
   
 
 //FUNCION PARA OBTENER LOS USUARIOS
 const handdleGetRoutines = async () => {
   //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
   const routines =  await dispatch(routinesStartLoading());
   const table = document.getElementById("table");
   let data = '';
   console.log(routines.length)

   if(routines.length == 0){
     return document.getElementById("table").innerHTML = "<p>No hay rutinas disponibles</p>";
   }

 
   for (let i = 0; i < routines.length; i++) {
     const routine = routines[i];
      data = data + JSON.stringify(routine)+'<br></br>';
     
     table.innerHTML = JSON.stringify(data) + `Total de Rutinas: ${routines.length}` ;
   }



   
 }
 
 
   
   return (
     <>
         <NavbarAdmin/>
         <div className='row  formAdmin' id='table'>
 
         </div>
 
 
         <div className="form-group formAdmin  row justify-content-center" >
           
 
         <button className='btn btn-success btnAdmin '  onClick={handdleGetRoutines}>OBTENER RUTINAS</button>
 
      
 
 
         
 
     
         <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />
           </div>
     </>
 
 
 
   
   )

}
