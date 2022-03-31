import { Navigate, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

//ACCION STARTLOGIN
export const startLogin =  (email, pass) => {


    return async(dispatch)=> {

        //GUARDAMOS EN UNA VARIABLE LA RESPUESTA DE NUESTRA API
        const resp = await fetchSinToken('auth/', {email, pass}, 'POST');

        //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
        const body = await resp.json();

        //COMPROBAMOS QUE LA LLAMADA A LA API HAYA SIDO CORRECTA
        if(body.ok){
            //GRABAMOS EN EL LOCALSTORAGE EL TOKEN DE INICIO DE SESION Y LA FECHA EN LA QUE SE HA CREADO EL TOKEN
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            // Swal.fire('Correcto', body.msg, 'success');


        }else {
            return Swal.fire('Error', body.msg, 'error');
        }




        //DISPARAMOS LA ACCION LOGIN DEL USUSARIO
        dispatch(login({
            uid : body.uid,
            name: body.name
        }))
    }
}

//ACCION STARTCREATEISER
export const startCreateUser =  (name,email, pass) => {


    return async(dispatch)=> {

        //GUARDAMOS EN UNA VARIABLE LA RESPUESTA DE NUESTRA API
        const resp = await fetchSinToken('auth/new', {name, email, pass}, 'POST');

        //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
        const body = await resp.json();

        //COMPROBAMOS QUE LA LLAMADA A LA API HAYA SIDO CORRECTA
        if(body.ok){
            //GRABAMOS EN EL LOCALSTORAGE EL TOKEN DE INICIO DE SESION Y LA FECHA EN LA QUE SE HA CREADO EL TOKEN
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            Swal.fire('Usuario creado correctamente', body.msg, 'success');


            //grabamos la informacion del ususario en el state
        }else {
            Swal.fire('Error', body.msg, 'error');
        }




        //DISPARAMOS LA ACCION LOGIN DEL USUSARIO
        dispatch(login({
            uid : body.uid,
            name: body.name
        }))
    }
};


//ACCION STARTCREATEISER
export const startCreateUserAdmin =  (name,email, pass) => {


    return async(dispatch)=> {

        //GUARDAMOS EN UNA VARIABLE LA RESPUESTA DE NUESTRA API
        const resp = await fetchSinToken('auth/new', {name, email, pass}, 'POST');

        //GUARDAMOS EL VALOR DE LA RESPUESTA EN FORMATON JSON
        const body = await resp.json();

        //COMPROBAMOS QUE LA LLAMADA A LA API HAYA SIDO CORRECTA
        if(body.ok){
            //GRABAMOS EN EL LOCALSTORAGE EL TOKEN DE INICIO DE SESION Y LA FECHA EN LA QUE SE HA CREADO EL TOKEN
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            Swal.fire('Usuario creado correctamente', body.msg, 'success');


            //grabamos la informacion del ususario en el state
        }else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


export const startDeleteUser = (uid) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`users/deleteUser${uid}`,{}, 'DELETE');
        const body = await resp.json();

        if(body.ok){
            dispatch(deleteUser());
            return Swal.fire('Usuario eliminado correctamente', body.msg, 'success');
        }else{
            return Swal.fire('Error', body.msg, 'error');
        }
    }
}


export const startChecking = () => {
    return async(dispatch) => {
        
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}


export const startLogout = () => {
    return  (dispatch) => {
       localStorage.clear();
       dispatch(logout());
    }
};

export const startLogoutAdmin = () => {
    return  (dispatch) => {
         localStorage.clear();
       dispatch(logout());
    }
};

 export const startEditUser = (userId, email, name, pass) => {

    return async(dispatch) => {

        const resp = await fetchSinToken(`users/editUser${userId}`,{ email, name, pass}, 'PUT');
        const body = await resp.json();



        if(body.ok){
            dispatch(editUser());
            return Swal.fire('Success', body.msg, 'success');
        }else{
            return Swal.fire('Error', body.msg, 'error');
        }
    }
    
}






export const checkingFinish = () => ({ type: types.authCheckingFinish });


const editUser = () => ({type: types.userEdit})



const login = (email,pass) => ({
    type: types.authLogin,
    payload: email,
    checking: false
});





const logout = () => ({
    type: types.authLogout,
});

const deleteUser = () => ({type: types.userDelete})

