import React from 'react';
import { useDispatch } from 'react-redux';
import { dietasStarLoading } from '../../../actions/admin';
import { generateTableDietas } from '../../../hooks/generateTable';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const VerDietas = () => {
 //IMPORTAMOS EL DISPATCH
 const dispatch = useDispatch();

 

//FUNCION PARA OBTENER LOS USUARIOS
const handdleGetDietas = async () => {
  //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
  const data =   await dispatch(dietasStarLoading());
  const table = document.getElementById("table");

  const data_html =  generateTableDietas(data);

  console.log(data_html);
  table.innerHTML = `<table>${data_html}</table><p>Total de Dietas: ${data.length}</p>`;



 
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