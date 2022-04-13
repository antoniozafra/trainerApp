import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRoutinesId } from '../../actions/admin';
import { generateTableRoutines } from '../../hooks/generateTable';
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar';







export const ConsultarRutinas = () => {

  
     //IMPORTAMOS EL DISPATCH
     const dispatch = useDispatch();

     //EXTRAEMOS EL ID DEL USUARIO DEL STATE
     const uid = useSelector(state => state.auth.uid);
     
     
   
   //FUNCION PARA OBTENER LOS USUARIOS
   const handdleGetRoutines = async () => {
     //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
   const data =   await dispatch(getRoutinesId(uid));
   const table = document.getElementById("table");
 
   const data_html =  generateTableRoutines(data);
 
   console.log(data_html);
   table.innerHTML = `<table>${data_html}</table><p>Total de Rutinas: ${data.length}</p>`;
 
 
   }
   
   
     
     return (
       <>
           <Navbar/>
           <div className='row  formAdmin' id='table'>
   
           </div>
   
   
           <div className="form-group formAdmin  row justify-content-center" >
             
   
           <button className='btn btn-success btnAdmin '  onClick={handdleGetRoutines}>OBTENER RUTINAS</button>
   
        
   
   
           
   
       
           <BackButton path={'/'} title={'Volver Atras'}  />
             </div>
       </>
   
   
   
     
     )
  
  }
  