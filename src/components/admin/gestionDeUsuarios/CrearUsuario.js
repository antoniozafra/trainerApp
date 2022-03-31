import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startCreateUser, startCreateUserAdmin } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';



export const CrearUsuario = () => {

    //IMPORTAMOS EL DISPATCH
    const dispatch = useDispatch();

    //HACEMOS USO DE USEFORM PARA CONTROLAR LOS CAMPOS DEL FORMULARIO
    const [formcreateUserValues, handdleCreateUserInputChange] = useForm({
        name : 'Trainer App',
        username: 'trainerapp@gmail.com',
        pass1: '123456',
        pass2: '123456'
    });

    //DESESTRUCTURAMOS LOS DATOS DEL FORMULARIO
    const {name, username, pass1, pass2} = formcreateUserValues;
   

     const handdleCreate = (e) => {
         e.preventDefault();
         //PRIMERO COMPROBAMOS QUE LAS DOS CONTRASEÑAS COINCIDEN
        if( pass1 !==  pass2){
             return Swal.fire('error','Las contraseñas no coinciden','error')
        }

        //DISPARAMOS LA ACCION PARA COMENZAR EL REGISTRO
        dispatch(startCreateUserAdmin(name, username, pass2))



    };



  return (
    <>
            <NavbarAdmin/>


            {/* FORMULARIO PARA CREAR USUARIO */}
            <div className=' form-group formAdmin row justify-content-center'>

            <h1 className='text-center '>Añadir Usuario</h1>

            <form onSubmit={handdleCreate}>
                {/* NOMBRE DEL USUARIO */}
                <label>Introduzca nombre</label>
                <input type="text" name='name' className="form-control" placeholder='Inrtroduzca el nombre del usuario' value={name} onChange={handdleCreateUserInputChange}/>

                {/* /* USERNAME */}
                <label>Introduzca nombre de usuario:</label>
                <input type="text" name='username' value={username}  className='form-control' placeholder='Introduza Usuario' onChange={handdleCreateUserInputChange}/>


                {/* {/* CONTRASEÑA DEL USUARIO */ }
                <label>Introduzca contraseña</label>
                <input type="password" name='pass1' value={pass1}  className='form-control' placeholder='Introduzca Contraseña' onChange={handdleCreateUserInputChange}/>  
                <input type="password" name='pass2' value={pass2}  className='form-control' placeholder='Repita la contraseña' onChange={handdleCreateUserInputChange}/>  


                <button type='submit ' className='btn btn-lg btn-success text-center' >Crear Usuario</button>
            </form>


            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
            </div>
    
    </>


    )
}
