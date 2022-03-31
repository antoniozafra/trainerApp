import React from 'react'
import { Navbar } from '../ui/Navbar'
import { UserPanelTitleBotton } from '../ui/UserPanelTitleBotton';

//URL DE LA IMAGEN QUE ASINAREMOS (POR DEFECTO)
export const defaultUrl = 'http://pueblosvivosaragon.com/wp-content/uploads/2018/08/avatar-1-300x300.png';

export const TrainerScreen = () => {
  //DEVOLVEMOS EL CONTENIDO DE LA PANTALLA PRINCIPAL DEL USUARIO
  return (
    <>
<Navbar/>

    <div className='container text-center mb-5'>
      <h1>Panel de Usuario</h1>

      {/*CREAMOS LA LISTA DE ENLACES EN LOS QUE EL USUARIO AUTENTICADO PODRA NAVEGAR */}
      
      {/*ENLACE GESTOR DE KCAL */}
      <div className="row mb-5">
        <div className="col-sm">
          <img width="50%" src={defaultUrl}></img>
          <UserPanelTitleBotton path={'/gestorKcal'} title={'GESTOR DE KCAL'}/>
        </div>

        {/*ENLAZE CONSULTAR EJERCICIOS */}
        <div className="col-sm">
        <img width="50%" src={defaultUrl}></img>
        <UserPanelTitleBotton path={'/consultarEjercicios'} title={'CONSULTAR EJERCICIOS'}/>

          
        </div>

        {/*ENLACE CONSULTAR RECETAS */}
        <div className="col-sm">
        <img width="50%" src={defaultUrl}></img>
        <UserPanelTitleBotton path={'/consultarRecetas'} title={'CONSULTAR RECETAS'}/>
        </div>

      </div>

      <div className="row">

         {/*ENLACE CONSULTAR RUTINA */}
         <div className="col-sm">
        <img width="50%" src={defaultUrl} ></img>
        <UserPanelTitleBotton path={'/consultarRutinas'} title={'CONSULTAR RUTINAS'}/>
        </div>


         {/*ENLACE CONSULTAR DIETA */}
        <div className="col-sm">
        <img width="50%" src={defaultUrl}></img>
        <UserPanelTitleBotton path={'/consultarDietas'} title={'CONSULTAR DIETAS'}/>
        </div>


          {/*ENLACE EN BLANCO PARA CUADRAR BIEN TODAS LAS POSICIONES */}
          <div className="col-sm">
        {/* <img width="100%" src='http://pueblosvivosaragon.com/wp-content/uploads/2018/08/avatar-1-300x300.png'></img>
        <span>CONSULTAR DIETA</span> */}
        </div>
        
      </div>

    </div>


    </>

    )
}

