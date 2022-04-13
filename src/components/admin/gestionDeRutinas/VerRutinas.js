import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import { routinesStartLoading } from '../../../actions/admin'
import { generateTableRoutines } from '../../../hooks/generateTable'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'




export const VerRutinas = () => {
 
   //IMPORTAMOS EL DISPATCH
   const dispatch = useDispatch();

   //EXTRAEMOS Y GUARDAMOS LOS USUARIOS DEL STATE
   
 
 //FUNCION PARA OBTENER LOS USUARIOS
 const handdleGetRoutines = async () => {
   //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
  const data =   await dispatch(routinesStartLoading());
  const table = document.getElementById("table");

  const data_html =  generateTableRoutines(data);

  console.log(data_html);
  table.innerHTML = `<table>${data_html}</table><p>Total de Rutinas: ${data.length}</p>`;

 



   
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
