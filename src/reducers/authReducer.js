import { types } from "../types/types";

const initialState = {
    checking : true,
    // uid,
    //  name: null
};







export const authReducer = (state = initialState, action) => {
    

    //CREAMOS UN SWITH CON TODAS LAS ACIONES, EN ESTE CASO DEL AUTH REDUCER
    switch (action.type) {

        //CASO AUTHLOGIN
        case types.authLogin:

            //DEVOLVEMOS EL ESTADO Y LA INFORMACION MANDADA    
            return {
                ...state,
                ...action.payload,
                checking: false
            
            }
        
            //CASO PARA TERMINAR DE COMPROBAR LA AUTENTICACION
            case types.authCheckingFinish:
                return {
                    ...state,
                    checking: false
                }

                //CASO PARA CERRAR SESION
            case types.authLogout:
                return {
                    checking: false

                }

               //CASO PARA INICIAR SESION COMO ADMINISTRADOR
               case types.authAdminLogin:
                   return {
                       ...state,
                       ...action.payload,
                       
                    checking: false,
                    
                    }

                case types.usersLoader: 
                return{
                    ...state,
                    users: action.payload
                }

                case types.userDelete: 
                return{
                    ...state
                }

                case types.userEdit:
                return {
                    ...state
                }
                
        default:
            return state;
    }

}