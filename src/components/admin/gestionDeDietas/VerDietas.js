import React from 'react';
import { useDispatch } from 'react-redux';
import { dietasStarLoading } from '../../../actions/admin';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const VerDietas = () => {
 //IMPORTAMOS EL DISPATCH
 const dispatch = useDispatch();

 

//FUNCION PARA OBTENER LOS USUARIOS
const handdleGetDietas = async () => {
 //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
 const dietas =  await dispatch(dietasStarLoading());
 const table = document.getElementById("table");
 let data = '';

 if(dietas.length === 0){
   return document.getElementById("table").innerHTML = "<p>No hay dietas disponibles</p>";
 }

 for (let i = 0; i < dietas.length; i++) {
   const dieta = dietas[i];
    data = data + JSON.stringify(dieta)+'<br></br>';
   
   table.innerHTML = JSON.stringify(data)+ `Total de Dietas: ${dietas.length}` ;
 }
 
}


 
 return (
   <>
       <NavbarAdmin/>
       <div className='row  formAdmin' id='table'>

       </div>


       <div className="form-group formAdmin  row justify-content-center" >
         

       <button className='btn btn-success btnAdmin '  onClick={handdleGetDietas}>Obtener Dietas</button>

  

   
       <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />
         </div>
   </>



 
 )
 }