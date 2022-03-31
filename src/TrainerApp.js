import React from 'react';
import { AppRouter } from './router/AppRouter';
import {Provider} from 'react-redux'
import {store} from './store/store'




export const TrainerApp = () => {


  return (

    //ENVOLVEMOS TODA NUESTRA APLICACION EN EL PROVIDER PARA ASIGNAR AL STORE TODOS LOS DATOS DURANTE LAS INTERACCIONES
    <Provider store={store}>


    {/* //HACEMOS LA LLAMADA AL APPROUTER */}
    <AppRouter/>


    </Provider>
    )
}
