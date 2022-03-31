import React from 'react'
import { useDispatch } from 'react-redux';
import { usersStartLoading } from '../../../actions/admin';
import { UserDisplay } from '../../../helpers/UserDisplay';
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
  const users =  await dispatch(usersStartLoading());
  const table = document.getElementById("table");
  let data = '';

  if(users.length === 0){
    return document.getElementById("table").innerHTML = "<p>No hay rutinas disponibles</p>";
  }

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
     data = data + JSON.stringify(user)+'<br></br>';
    
    table.innerHTML = JSON.stringify(data)+ `Total de Usuarios: ${users.length}` ;
  }
  
}


  
  return (
    <>
        <NavbarAdmin/>
        <div className='row  formAdmin' id='table'>

        </div>


        <div className="form-group formAdmin  row justify-content-center" >
          

        <button className='btn btn-success btnAdmin '  onClick={handdleGetUsers}>Obtener Usuarios</button>

     


        

    
        <BackButton path={'/adminPanel'} title={'Volver al Panel de Control'}  />
          </div>
    </>



  
  )
  }
