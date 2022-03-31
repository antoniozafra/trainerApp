import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { LoginScreenAdmin } from '../components/auth/LoginScreenAdmin';
import { TrainerScreen } from '../components/trainer/TrainerScreen';
import '../styles.css'
import { Footer } from '../components/ui/Footer';
import { GestorKcal } from '../components/gestorKcal/GestorKcal';
import { ConsultarEjercicios } from '../components/consultarEjercicios/ConsultarEjercicios';
import { ConsultarRecetas } from '../components/consultarRecetas/ConsultarRecetas';
import { ConsultarRutinas } from '../components/consultarRutinas/ConsultarRutinas';
import { ConsultarDietas } from '../components/consultarDietas/ConsultarDietas';
import { Servicios } from '../components/servicios/Servicios';
import { Tarifas } from '../components/tarifas/Tarifas';
import { Contacto } from '../components/contacto/Contacto';
import { AdminPanelScreen } from '../components/admin/AdminPanelScreen';
import { VerUsuarios } from '../components/admin/gestionDeUsuarios/VerUsuarios';
import { CrearUsuario } from '../components/admin/gestionDeUsuarios/CrearUsuario';
import { ModificarUsuario } from '../components/admin/gestionDeUsuarios/ModificarUsuario';
import { EliminarUsuario } from '../components/admin/gestionDeUsuarios/EliminarUsuario';
import { VerRutinas } from '../components/admin/gestionDeRutinas/VerRutinas';
import { CrearRutina } from '../components/admin/gestionDeRutinas/CrearRutina';
import { ModificarRutina } from '../components/admin/gestionDeRutinas/ModificarRutina';
import { EliminarRutina } from '../components/admin/gestionDeRutinas/EliminarRutina';
import { VerDietas } from '../components/admin/gestionDeDietas/VerDietas';
import { CrearDieta } from '../components/admin/gestionDeDietas/CrearDieta';
import { ModificarDieta } from '../components/admin/gestionDeDietas/ModificarDieta';
import { EliminarDieta } from '../components/admin/gestionDeDietas/EliminarDieta';
import { VerEjercicios } from '../components/admin/gestionDeEjercicios/VerEjercicios';
import { CrearEjercicio } from '../components/admin/gestionDeEjercicios/CrearEjercicio';
import { ModificarEjercicio } from '../components/admin/gestionDeEjercicios/ModificarEjercicio';
import { EliminarEjercicio } from '../components/admin/gestionDeEjercicios/EliminarEjercicio'
import { CrearReceta } from '../components/admin/gestionDeRecetas/CrearReceta';
import { EliminarReceta } from '../components/admin/gestionDeRecetas/EliminarReceta';
import { ModificarReceta } from '../components/admin/gestionDeRecetas/ModificarReceta';
import { VerRecetas } from '../components/admin/gestionDeRecetas/VerRecetas';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking, startLogin } from '../actions/auth';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { PrivateRouteAdmin } from './PrivateRouteAdmin';
import { PublicRouteAdmin } from './PublicRouteAdmin';








export const AppRouter =  () => {
  
  //IMPORTAMOS EL DISPATCH DE REDUX
  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth);
  // const { uidAdmin} = useSelector(state => state.auth);


  
 
//   DISPARAMOS USEEFECT PARA COMPROBAR SI EL USUARIO A INGRESAR SIGE TENIENDO EL TOKEN VALIDO
  useEffect(() => {
        
    dispatch( startChecking() );

}, [dispatch])


    if(checking ){
      return (<h5>Espere por favor</h5>)

    }
    
    


  return (
// DECLARAMOS EL FRAGMENTR PARA QUE MI ELEMENTO APPROUTER DEVUELVA SOLO UN ELEMENTO HTML
  <>


        {/*TODAS LAS RUTAS DE MI APLICACION DEBEMOS DE ENVOLVERLAS EN BROSEROUTER */}
        <BrowserRouter>

        {/*ENVOLVEMOS TODAS LAS RUTAS CON Routes, Y CADA RUTA INDIVIDUAL CON ROUTE */}
        <Routes>

            {/*RUTA "/login", SERÁ PÚBLICA  */}
            <Route exact path='/login' element={ 
              <PublicRoute uid={uid} >
                <LoginScreen/> 
              </PublicRoute>
            } 
          />

            {/*RUTA "/servicios", SERÁ PÚBLICA */}
            <Route exact="exact" path="/servicios" element={<Servicios/>}>
            </Route>

            {/*RUTA "/tarifas", SERÁ PUBLICA */}
            <Route exact="exact" path="/tarifas" element={<Tarifas/>}>
            </Route>

          {/*RUTA "/contacto", SERÁ PÚBLICA */}
          <Route exact="exact" path="/contacto" element={<Contacto/>}>
          </Route>




            {/*RUTA "/", SERÁ PARA USUARIOS AUTENTICADOS */}
            <Route exact path='/' 
            element={ 
              <PrivateRoute uid={uid}>
                <TrainerScreen />
              </PrivateRoute> 
            }  
          />

             {/*RUTA "/admin", SERÁ PUBLICA  */}
             <Route
              exact="exact"
               path='/admin'
                element={
              <PublicRouteAdmin uid={uid} >
                <LoginScreenAdmin/> 
              </PublicRouteAdmin>                 
            }>
            </Route>

            {/*RUTA "/admin/adminpanel", SERÁ SOLO PARA LA AUTENTICACION DEL AMDINISTRADOR */}
            <Route
                exact="exact"
                path='/adminPanel'
               element={
                 <PrivateRouteAdmin uid={uid}>
                    <AdminPanelScreen/>
                    </PrivateRouteAdmin>
              
              }>
            </Route>


            {/*RUTAS DE LA GESTION DE USUARIOS */}
            {/*RUTA "/verUsuarios", SERÁ PRIVADA */}
            <Route
             exact="exact"
              path='/verUsuarios'
               element={
                 <PrivateRoute uid={uid}>

               <VerUsuarios/>
                 </PrivateRoute>
               }>
            </Route>

            {/*RUTA "/crearUsuario", SERÁ  PRIVADA */}
            <Route
                 exact="exact"
                path='/crearUsuario'
                element={
                 <PrivateRouteAdmin uid={uid}>
                   <CrearUsuario/>
                 </PrivateRouteAdmin>
               }>
            </Route>

            {/*RUTA "/modificarUsuario" */}
            <Route
             exact="exact"
              path="/modificarUsuario"
               element={
                 <PrivateRouteAdmin uid={uid}>
               <ModificarUsuario/>
                 </PrivateRouteAdmin>
               }>
            </Route>

            {/*RUTA "/eliminarUsuario" */}
            <Route
             exact="exact"
              path="eliminarUsuario"
               element={
                 <PrivateRouteAdmin uid={uid}>
                   <EliminarUsuario/>
                 </PrivateRouteAdmin>
               }>
            </Route>


            {/*RUTAS DE LA GESTION DE RUTINAS */}
             {/*ruta "/verRutinas", SERÁ PRIVADA */}
             <Route
              exact="exact"
               path='/verRutinas'
                element={
                  <PrivateRouteAdmin uid={uid}>
                    <VerRutinas/>
                  </PrivateRouteAdmin>
                }>
             </Route>

             {/*RUTA "/crearRutina", SERA PRIVADA */}
             <Route
              exact="exact"
               path="/crearRutina"
                element={
                  <PrivateRouteAdmin uid={uid}>
                <CrearRutina/>
                  </PrivateRouteAdmin>
                }>
             </Route>

             {/*RUTA "/modificarRutina" SERA PRIVADA */}
             <Route
              exact="exact"
               path="/modificarRutina"
                element={
                  <PrivateRouteAdmin uid={uid}>
                <ModificarRutina/>
                  </PrivateRouteAdmin>
                }>
             </Route>

             {/*RUTA "/eliminarRutina" SERÁ PRIVADA */}
             <Route
              exact="exact"
               path='/eliminarRutina'
                element={
                  <PrivateRouteAdmin uid={uid}>
                <EliminarRutina/>
                  </PrivateRouteAdmin>
                }>
             </Route>


             {/*RUTAS DE LA GESTION DE DIETAS */}
             {/*RUTA "/verDietas", SERA PRIVADA */}
             <Route
              exact="exact"
               path="/verDietas"
                element={
                  <PrivateRoute uid={uid}>
                    <VerDietas/>
                  </PrivateRoute>
                }>
             </Route>

             {/*RUTA "/crearDieta", SERA PRIVADA */}
             <Route
              exact="exact" 
              path="/crearDieta"
               element={
                 <PrivateRoute uid={uid}>
                <CrearDieta/>
                 </PrivateRoute>
               }>
             </Route>

               {/*RUTA "/modificarDieta" PARA USUSARIOS AUNTENTICADOS */}
               <Route
                exact="exact"
                 path='/modificarDieta'
                  element={
                    <PrivateRouteAdmin uid={uid}>
                  <ModificarDieta/>
                    </PrivateRouteAdmin>
                  }>
            </Route>

             {/*RUTA "/eliminarDieta" PARA USUSARIOS AUNTENTICADOS */}
             <Route
              exact="exact"
               path='/eliminarDieta'
                element={
                  <PrivateRouteAdmin uid={uid}>
                <EliminarDieta/>
                  </PrivateRouteAdmin>
                }>
            </Route>


            {/*RUTAS PARA LA GESTION DE EJERCICIOS */}
            {/*RUTA "/verEjercicios", SERA PRIVADA */}
            <Route 
            exact="exact"
             path="/verEjercicios"
              element={
                <PrivateRouteAdmin uid={uid}>
              <VerEjercicios/>
                </PrivateRouteAdmin>
              }>
            </Route>

            {/*RUTA "/crearEjercicio", SERA PRIVADA */}
            <Route
             exact="exact"
              path="/crearEjercicio"
               element={
                 <PrivateRouteAdmin uid={uid}>
               <CrearEjercicio/>
                 </PrivateRouteAdmin>
               }>
            </Route>

             {/*RUTA "/modififcarEjercicio", SERA PRIVADA */}
             <Route
              exact="exact"
               path="/modificarEjercicio"
                element={
                  <PrivateRouteAdmin uid={uid}>
                <ModificarEjercicio/>
                  </PrivateRouteAdmin>
                }>
            </Route>

              {/*RUTA "/eliminarEjercicio", SERA PRIVADA */}
              <Route
               exact="exact"
                path="/eliminarEjercicio"
                 element={
                   <PrivateRouteAdmin uid={uid}>
                 <EliminarEjercicio/>
                   </PrivateRouteAdmin>
                 }>
            </Route>



            {/*RUTAS PARA LA GESTION DE RECETAS */}
            {/*RUTA "/verRecetas", SERA PRIVADA */}
            <Route
            exact="exact"
            path="/verRecetas"
             element={
               <PrivateRouteAdmin uid={uid}>
                 <VerRecetas/>
               </PrivateRouteAdmin>
             }>
            </Route>

            {/*RUTA "/crearReceta", SERA PRIVADA */}
            <Route
             exact="exact"
              path="/crearReceta"
               element={
                 <PrivateRouteAdmin uid={uid}>
                   <CrearReceta/>
                 </PrivateRouteAdmin>
               }>
            </Route>

             {/*RUTA "/modificarReceta", SERA PRIVADA */}
             <Route
              exact="exact"
               path="/modificarReceta"
                element={
                  <PrivateRouteAdmin uid={uid}>
                <ModificarReceta/>
                  </PrivateRouteAdmin>
                }>
            </Route>

              {/*RUTA "/eliminarReceta", SERA PRIVADA */}
              <Route
               exact="exact"
                path="/eliminarReceta"
                 element={
                   <PrivateRouteAdmin uid={uid}>
                 <EliminarReceta/>
                   </PrivateRouteAdmin>
                 }>
            </Route>










            {/*RUTA "/gestorKcal", PARA USUARIOS AUTENTICADOS */}
            <Route
             exact="exact"
              path='/gestorKcal'
               element={
                 <PrivateRoute uid={uid}>
               <GestorKcal/>
                 </PrivateRoute>
               }>
            </Route>

            {/*RUTA "/consultarEjercicios", PARA USUSARIO AUNTENCIADOS */}
            <Route
             exact="exact"
               path='/consultarEjercicios'
                element={
                  <PrivateRoute uid={uid}>
                <ConsultarEjercicios/>
                  </PrivateRoute>
                }>
            </Route>

            {/*RUTA "/consultarRceteas" PARA USUARIOS AUTENTICADOS */}
            <Route
                exact="exact"
                path='/consultarRecetas'
               element={
                <PrivateRoute uid={uid}>
                  <ConsultarRecetas/>
                </PrivateRoute>
               }>
            </Route>

            {/*RUTA "/consultarRutinas" PARA USUARIOS AUTENTICADOS */}
            <Route
                exact="exact"
                path='/consultarRutinas'
                element={
                  <PrivateRoute uid={uid}>
                    <ConsultarRutinas/>
                  </PrivateRoute>
                }>
            </Route>



             {/*RUTA POR DEFECTO POR SI NO ENCUENTRA NINGUNA DE LAS ANTERIORES, DIRIGE A "/" */}
             <Route path='*' element={<LoginScreen/>}>
            </Route>

        </Routes>



    </BrowserRouter>

    {/*LLAMAMOS AL COMOPONENTE FOOTER */}
    <Footer/>

    </>

  )
}
