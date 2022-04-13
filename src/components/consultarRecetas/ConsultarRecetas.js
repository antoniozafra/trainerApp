import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { recetasStartLoading, routinesStartLoading } from '../../actions/admin'
import { startChecking } from '../../actions/auth'
import { generateTableRecetas } from '../../hooks/generateTable'
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar'



export const ConsultarRecetas = () => {
   //IMPORTAMOS EL DISPATCH
   const dispatch = useDispatch();


   useEffect(() => {
        
    dispatch( startChecking() );

}, [dispatch])



   //EXTRAEMOS Y GUARDAMOS LOS USUARIOS DEL STATE
   
 
 //FUNCION PARA OBTENER LOS USUARIOS
 const handdleGetRoutines = async () => {
    //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
    const data =   await dispatch(recetasStartLoading());
    const table = document.getElementById("table");
  
    const data_html =  generateTableRecetas(data);
  
    console.log(data_html);
    table.innerHTML = `<table>${data_html}</table><p>Total de Recetas: ${data.length}</p>`;
  
  

   
 }
 
 
   
   return (
     <>
         <Navbar/>
         <div className='row  formAdmin' id='table'>
 
         </div>
 
 
         <div className="form-group formAdmin  row justify-content-center" >
           
 
         <button className='btn btn-success btnAdmin '  onClick={handdleGetRoutines}>OBTENER RECETAS</button>
 
      
 
 
         
 
     
         <BackButton path={'/'} title={'Volver al Panel de Control'}  />
           </div>
     </>
 
 
 
   
   )

}
