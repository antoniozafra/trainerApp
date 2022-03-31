import React from 'react'
import { defaultUrl } from '../trainer/TrainerScreen';
import { NavbarAdmin } from '../ui/NavbarAdmin';


export const AdminPanelScreen = () => {
    //VER, CREAR, MODIFICAR, ELIMINAR
  return (

      <>
    <NavbarAdmin/>
    <div className='container text-center'>
        <h1>Panel de Control Administrador</h1>
    

    {/*GESTION DE USUARIOS */}
        <div className="btn-group m-2">
        <button type="button" className="tn btn-primary btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GESTION DE USUARIOS
        </button>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="/verUsuarios">Ver Usuarios</a>
            <a className="dropdown-item" href="/crearUsuario">Crear Usuario</a>
            <a className="dropdown-item" href="/modificarUsuario">Modificar Usuario</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-danger" href="/eliminarUsuario">Eliminar Usuario</a>
        </div>
        </div>


        {/*GESTION DE RUTINAS */}
        <div className="btn-group m-2">
        <button type="button" className="tn btn-primary btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        GESTION DE RUTINAS
        </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="/verRutinas">Ver Rutinas</a>
            <a className="dropdown-item" href="/crearRutina">Crear Rutina</a>
            <a className="dropdown-item" href="/modificarRutina">Modificar Rutina</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-danger" href="/eliminarRutina">Eliminar Rutina</a>
        </div>
        </div>



        {/*GESTION DE DIETAS */}
        <div className="btn-group m-2">
        <button type="button" className="tn btn-primary btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GESTION DE DIETAS
        </button>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="/verDietas">Ver Dietas</a>
            <a className="dropdown-item" href="/crearDieta">Crear Dieta</a>
            <a className="dropdown-item" href="/modificarDieta">Modificar Dieta</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-danger" href="/eliminarDieta">Eliminar Dieta</a>
        </div>
        </div>

        {/*GESTION DE EJERCICIOS */}
        <div className="btn-group m-2">
    <button type="button" className="tn btn-primary btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        GESTION DE EJERCICIOS
    </button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href="/verEjercicios">Ver Ejercicios</a>
        <a className="dropdown-item" href="/crearEjercicio">Crear Ejercicio</a>
        <a className="dropdown-item" href="/modificarEjercicio">Modificar Ejercicio</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item text-danger" href="/eliminarEjercicio">Eliminar Ejercicio</a>
    </div>
    </div>

      {/*GESTION DE EJERCICIOS */}
      <div className="btn-group m-2">
    <button type="button" className="tn btn-primary btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        GESTION DE RECETAS
    </button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href="/verRecetas">Ver Recetas</a>
        <a className="dropdown-item" href="/crearReceta">Crear Receta</a>
        <a className="dropdown-item" href="/modificarReceta">Modificar Receta</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item text-danger" href="/eliminarReceta">Eliminar Receta</a>
    </div>
    </div>




    </div>


     
  



   
    
    </>
  )
}
