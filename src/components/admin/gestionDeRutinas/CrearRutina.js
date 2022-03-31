import React from 'react'
import { useDispatch } from 'react-redux';
import { startCreateRutina } from '../../../actions/admin';
import { useForm } from '../../../hooks/useForm';
import { BackButton } from '../../ui/BackButton';
import { NavbarAdmin } from '../../ui/NavbarAdmin';




export const CrearRutina = () => {

  const dispatch = useDispatch();

//  DECLARAMOS EL INITIALSTATE
const initialState = {
  idUser: '1',
  lunes : '2',
  martes : '3',
  miercoles : '4',
  jueves : '5',
  viernes : '6',
  sabado : '7',
  domingo : '8',
  optionalComent: '9'
};

//HCEMOS USO DEL USEFORM
const [createRutinaFomr, setCreateRutinaForm] = useForm(initialState);

const {idUser, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalComent} = createRutinaFomr;


//CREAMOS LA FUNCION PARA CREAR LA RUTINA
const handdleSubmitForm = (e) => {
  e.preventDefault();

  //DISPARAMOS LA ACCION PARA  CREAR LA RUTINA
  dispatch(startCreateRutina(idUser, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalComent))
}



  return (
        <>
        
          <NavbarAdmin/>
            {/* FORMULARIO PARA CREAR USUARIO */}
            <div className=' form-group formAdmin row justify-content-center'>

            <h1 className='text-center '>Crear Rutina</h1>

            <form onSubmit={handdleSubmitForm} >
                {/* ID DEL USUARIO */}
                <label>ID de Usuario:</label>
                <input type="text" name='idUser' className="form-control" placeholder='Inrtroduzca el ID del usuario:' value={idUser} required onChange={setCreateRutinaForm}/>

                {/* /* LUNES */}
                <label>Lunes:</label>
                <textarea type="text-area" name='lunes'   className='form-control' required  value={lunes} onChange={setCreateRutinaForm}/>

                {/* /* MARTES */}
                <label>Martes:</label>
                <textarea type="text-area" name='martes'   className='form-control' required value={martes} onChange={setCreateRutinaForm}/>

                {/* /* Miercoles */}
                <label>Miercoles:</label>
                <textarea type="text-area" name='miercoles'   className='form-control' required  value={miercoles} onChange={setCreateRutinaForm}/>

                {/* /* JUEVES */}
                <label>Jueves:</label>
                <textarea type="text-area" name='jueves'   className='form-control' required value={jueves} onChange={setCreateRutinaForm} />

                {/* /* VIERNES */}
                <label>Viernes:</label>
                <textarea type="text-area" name='viernes'   className='form-control' required  value={viernes} onChange={setCreateRutinaForm}/>

                {/* /* SABADO */}
                <label>Sabado:</label>
                <textarea type="text-area" name='sabado'   className='form-control' required value={sabado} onChange={setCreateRutinaForm}/>

                {/* /* DOMINGO */}
                <label>Domingo:</label>
                <textarea type="text-area" name='domingo'   className='form-control' required value={domingo} onChange={setCreateRutinaForm}/>

                {/* /* Datos Adicionales */}
                <label>Informacion Opcional:</label>
                <textarea type="text-area" name='informacion'   className='form-control'  />


                
               


                <button type='submit ' className='btn btn-lg btn-success text-center' >Crear Rutina</button>
            </form>


            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
            </div>
        </>



  )
}
