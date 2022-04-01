import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { checkingFinish, startChecking } from "./auth";







//EXPORT CONST ADMINLOGIN
export const adminLogin =  (email, pass) => {

    return  async (dispatch) => {

            //HACEMOS LA PETICION A NUESTRO SERVIDOR
            const resp = await fetchSinToken('auth/loginAdmin', {email, pass}, 'POST');
            
            //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
            const body = await resp.json();
            

            //COMPROBAMOS SI LA RESPUESTA DE LA API ES CORRECTA
            if(body.ok){
                // //GUARDAMOS LOS DATOS EN EL LOCALSTORAGE QUE POSTERIORMENTE COMPROBAREMOS CON EL USEREEFCT
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                Swal.fire('Correcto', body.msg, 'success');
            }else{
                dispatch(checkingFinish())
                Swal.fire('Error', body.msg, 'error');
            }

             //DISPARAMOS LA ACCION LOGINadmnin DEL ADMIMNISTRADOR
            dispatch(loginAdmin({
                name: body.name,
                uid: body.uid
            }));

        
        }  
}


export const usersStartLoading = () =>{
return async  (dispatch) => {

    //DISPARAMOS EL TRY CATCH PARA EL MANEJO DE LOS ERRORES
    try {
        //GUARDAMOS LOS DATOS DE LA PETICION DEL SERVIDOR
        const resp = await fetchConToken('users/getUsers');
        const body =  await resp.json();

        const usuarios =  await body.usuarios;

        dispatch(userLoaded(usuarios));

        //DEVOLVEMOS LOS USUARIOS
        return usuarios;
        

        
      //MOSTRAMOS MENSAJE DE ERROR AL USUSARIO  
    } catch (error) {
         console.log(error)
        
    }


}


}



export const startCreateRutina=  (idUsuario, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription) =>  {
    //GUARDAMOS LOS DATOS A ENVIAR COMO OBJETO
    const data = {idUsuario, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription}


    return async (dispatch) => {

   
            //GUARDAMOS LA INFON DE LA RESPUESTA
            const resp = await fetchSinToken('routines/newRoutine', data, 'POST');

            //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
            const body = await resp.json();

             if(body.ok){
                return Swal.fire( 'Correcto', body.msg, 'success');

             }else{
                    Swal.fire('Error', body.msg, 'error');
             }
        

    }
}

export const startEditRoutine = (idRutina, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription ) => {

    return async (dispatch) => {
        
        try {

            //DEFINIMOS LOS DATOS A ENVIAR
        const data = {idRutina, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription};


        //GUARDAMOS LA RESPUESTA DEL SERVIDOR
        const resp = await fetchSinToken(`routines/editRoutine${idRutina}`, {idRutina, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription},'PUT');

        const body = await resp.json();

        if (body.ok){
            return Swal.fire('Correcto', body.msg, 'success');
        }else {
            return Swal.fire('Error', body.msg, 'error');
        }





        
        //CAPTURAMOS EL ERROR Y LO DEVOLVEMOS AL USUARIO    
        } catch (error) {
            
        }

        
       
    }
}

export const startDeleteRoutine = (idRutina) => {


    return async (dispatch) => {
        try {
            const resp = await fetchSinToken(`routines/deleteRoutine${idRutina}`, {idRutina},'DELETE');
            const body = await resp.json();

            if(body.ok){
                return Swal.fire('Correcto', body.msg, 'success');
            }else {
                return Swal.fire('Error', body.msg, 'error');
            }


            //CAPTURAMOS Y DEVOLVEMOS EL MENSAJE DE ERROR
            
        } catch (error) {
            console.log(error)
        }

       
    }
}


export const routinesStartLoading = () => {
    return async (dispatch) => {

         //DISPARAMOS EL TRY CATCH PARA EL MANEJO DE LOS ERRORES
    try {
        //GUARDAMOS LOS DATOS DE LA PETICION DEL SERVIDOR
        const resp = await fetchSinToken('routines/getRoutines');
        const body =  await resp.json();

        const rutinas =  await body.rutinas;

    

        //DEVOLVEMOS LOS USUARIOS
        return rutinas;
        

        
      //MOSTRAMOS MENSAJE DE ERROR AL USUSARIO  
    } catch (error) {
         console.log(error)
        
    }



        

    }
}

export const startCreateDieta=  (idUsuario, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription) =>  {
    //GUARDAMOS LOS DATOS A ENVIAR COMO OBJETO
    const data = {idUsuario, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription}


    return async (dispatch) => {

   
            //GUARDAMOS LA INFON DE LA RESPUESTA
            const resp = await fetchSinToken('dietas/newDieta', data, 'POST');

            //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
            const body = await resp.json();
            console.log(body)

             if(body.ok){
                return Swal.fire( 'Correcto', body.msg, 'success');

             }else{
                    Swal.fire('Error', body.msg, 'error');
             }
        

    }
}


export const startEditDieta = (idDieta, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription ) => {

    return async (dispatch) => {
        
        try {

            //DEFINIMOS LOS DATOS A ENVIAR
        const data = { lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription};


        //GUARDAMOS LA RESPUESTA DEL SERVIDOR
        const resp = await fetchSinToken(`dietas/editDieta${idDieta}`, { lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription},'PUT');

        const body = await resp.json();

        if (body.ok){
            return Swal.fire('Correcto', body.msg, 'success');
        }else {
            return Swal.fire('Error', body.msg, 'error');
        }

        //CAPTURAMOS EL ERROR Y LO DEVOLVEMOS AL USUARIO    
        } catch (error) {
            Swal.fire('Error', error, 'error');
            console.log(error)
            
        }

        
       
    }
}


export const startDeleteDieta = (idDieta) => {



    return async (dispatch) => {

     
        try {
            const resp = await fetchSinToken(`dietas/deleteDieta${idDieta}`, {idDieta},'DELETE');
            const body = await resp.json();

            if(body.ok){
                return Swal.fire('Correcto', body.msg, 'success');
            }else {
                return Swal.fire('Error', body.msg, 'error');
            }


            //CAPTURAMOS Y DEVOLVEMOS EL MENSAJE DE ERROR
            
        } catch (error) {
            return Swal.fire('Error', 'error');

        }

       
    }
}

export const dietasStarLoading = () => {
    return async (dispatch) => {

         //DISPARAMOS EL TRY CATCH PARA EL MANEJO DE LOS ERRORES
    try {
        //GUARDAMOS LOS DATOS DE LA PETICION DEL SERVIDOR
        const resp = await fetchSinToken('dietas/getDietas');
        const body =  await resp.json();

        const dietas =  await body.dietas;

    

        //DEVOLVEMOS LOS USUARIOS
        return dietas;
        

        
      //MOSTRAMOS MENSAJE DE ERROR AL USUSARIO  
    } catch (error) {
         console.log(error)
        
    }



        

    }
}

export const ejerciciosStartLoading = () => {
    return async (dispatch) => {

         //DISPARAMOS EL TRY CATCH PARA EL MANEJO DE LOS ERRORES
    try {
        //GUARDAMOS LOS DATOS DE LA PETICION DEL SERVIDOR
        const resp = await fetchConToken('exercises/getExercises');
        const body =  await resp.json();

        const ejercicios =  await body.ejercicios;

    

        //DEVOLVEMOS LOS USUARIOS
        return ejercicios;
        

        
      //MOSTRAMOS MENSAJE DE ERROR AL USUSARIO  
    } catch (error) {
         console.log(error)
        
    }



        

    }
}


export const startcreateEjercicio = (nombre,zonaMuscular, pasos, nivelDificultad, imagen) => { 


    return async (dispatch) => {
        
    //LANZAMOS UN TRY CATCH PARA EL MANEJO DE ERRORES
        try {
            //EJECUTAMOS LA CONSULTA AL SERVIDOR Y LA GUARDAMOS EN UNA VARIABLE
            const resp = await fetchSinToken('exercises/newExercise', {nombre,zonaMuscular, pasos, nivelDificultad, imagen},'POST');
            const body = await resp.json();



            if(body.ok){

                return Swal.fire('Correcto', body.msg, 'success');

            }else{
                Swal.fire('Error', body.msg, 'error');
            }
            




    }
catch (error) {
    console.log(error)
}




    }

}

export const startEditEjercicio = (IdEjercicio,nombre,zonaMuscular, pasos, nivelDificultad, imagen) => { 


    return async (dispatch) => {
        
    //LANZAMOS UN TRY CATCH PARA EL MANEJO DE ERRORES
        try {
            //EJECUTAMOS LA CONSULTA AL SERVIDOR Y LA GUARDAMOS EN UNA VARIABLE
            const resp = await fetchSinToken(`exercises/editExercise${IdEjercicio}`, {nombre,zonaMuscular, pasos, nivelDificultad, imagen},'PUT');
            const body = await resp.json();
            console.log(nombre,zonaMuscular, pasos, nivelDificultad, imagen);

            console.log(body)



            if(body.ok){

                return Swal.fire('Correcto', body.msg, 'success');

            }else{
                Swal.fire('Error', body.msg, 'error');
            }
            




    }
catch (error) {
    console.log(error)
}




    }

}


export const startDeleteEjercicio = (IdEjercicio) => {



    return async (dispatch) => {

     
        try {
            const resp = await fetchSinToken(`exercises/deleteExercise${IdEjercicio}`,{},'DELETE');
            const body = await resp.json();

            if(body.ok){
                return Swal.fire('Correcto', body.msg, 'success');
            }else {
                return Swal.fire('Error', body.msg, 'error');
            }


            //CAPTURAMOS Y DEVOLVEMOS EL MENSAJE DE ERROR
            
        } catch (error) {
            return Swal.fire('Error', 'error');

        }

       
    }
}

export const recetasStartLoading = () => {
    return async (dispatch) => {

         //DISPARAMOS EL TRY CATCH PARA EL MANEJO DE LOS ERRORES
    try {
        //GUARDAMOS LOS DATOS DE LA PETICION DEL SERVIDOR
        const resp = await fetchSinToken('recetas/getRecetas');
        const body =  await resp.json();

        const recetas =  await body.recetas;

    

        //DEVOLVEMOS LOS USUARIOS
        return recetas;
        

        
      //MOSTRAMOS MENSAJE DE ERROR AL USUSARIO  
    } catch (error) {
         console.log(error)
        
    }



        

    }
}

export const startCreateReceta = (nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen) => {

    return async (dispatch) => {
        
        //LANZAMOS UN TRY CATCH PARA EL MANEJO DE ERRORES
            try {
                //EJECUTAMOS LA CONSULTA AL SERVIDOR Y LA GUARDAMOS EN UNA VARIABLE
                const resp = await fetchSinToken('recetas/newReceta', {nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen},'POST');
                const body = await resp.json();
                console.log(body)
    
    
    
                if(body.ok){
    
                    return Swal.fire('Correcto', body.msg, 'success');
    
                }else{
                    Swal.fire('Error', body.msg, 'error');
                }
                
    
            }
            catch (error) {
                console.log(error)
            }
    
    
        }

}

export const startEditReceta = (idReceta,nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen) => {



    return async (dispatch) => {
        
        //LANZAMOS UN TRY CATCH PARA EL MANEJO DE ERRORES
            try {

                //DECLARAMOS LA DATA PARA ENVIARA
                const data = {nombre,tipoReceta, pasos,tiempoEstimado, nivelDificultad,ingredientes, imagen};
                //EJECUTAMOS LA CONSULTA AL SERVIDOR Y LA GUARDAMOS EN UNA VARIABLE
                const resp = await fetchSinToken(`recetas/editReceta${idReceta}`, data,'PUT');
                const body = await resp.json();

                console.log(body)
    
    
    
                if(body.ok){
    
                    return Swal.fire('Correcto', body.msg, 'success');
    
                }else{
                    Swal.fire('Error', body.msg, 'error');
                }
                
            }
            catch (error) {
                Swal.fire('Error',  'error');
            }
    
    
        }

}


export const startDeleteReceta = (idReceta) => {
    return async (dispatch) => {

     
        try {
            const resp = await fetchSinToken(`recetas/deleteReceta${idReceta}`,{},'DELETE');
            const body = await resp.json();
            console.log(body)

            if(body.ok){
                return Swal.fire('Correcto', body.msg, 'success');
            }else {
                return Swal.fire('Error', body.msg, 'error');
            }


            //CAPTURAMOS Y DEVOLVEMOS EL MENSAJE DE ERROR
            
        } catch (error) {
            return Swal.fire('Error', 'error');

        }

       
    }
}




const userLoaded = (users) => ({
    type: types.usersLoader,
    payload: users 
})



const loginAdmin = (email, pass) => ({
    type: types.authAdminLogin,
    payload: email,
    checking: false
})
