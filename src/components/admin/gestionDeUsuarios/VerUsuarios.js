import React from 'react'
import { useDispatch } from 'react-redux';
import { usersStartLoading } from '../../../actions/admin';
import { UserDisplay } from '../../../helpers/UserDisplay';
import { generateTableUsers } from '../../../hooks/generateTable';
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin';


// table.fnAddData([
//   data[i].id,
//   data[i].name,
//   data[i].description,
//   data[i].price,
//   data[i].idSector
//   //'<button type="button" value="Actualizar" title="Actualizar" class="btn btn-primary"> </button>'
// ]);



export const VerUsuarios = () => {
  //IMPORTAMOS EL DISPATCH
  const dispatch = useDispatch();

  //EXTRAEMOS Y GUARDAMOS LOS USUARIOS DEL STATE
  

//FUNCION PARA OBTENER LOS USUARIOS
const handdleGetUsers = async () => {
  //DISPARAMOS LA ACCION PARA OBTENER LOS USUARIOS
  const data =   await dispatch(usersStartLoading());
  const table = document.getElementById("table");

  const data_html =  generateTableUsers(data);

  console.log(data_html);
  table.innerHTML = `<table>${data_html}</table><p>Total de Usuarios: ${data.length}</p>`;

 
  
}


  
  return (
    <>
        <NavbarAdmin/>
        

          <div className='row  formAdmin' id='table'>

         

        </div>

        <div className="form-group formAdmin  row justify-content-center" >
          

        <button className='btn btn-success btnAdmin mt-5 '  onClick={handdleGetUsers}>Obtener Usuarios</button>

     


        

    
        <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />


          </div>
    </>



  
  )
  }
