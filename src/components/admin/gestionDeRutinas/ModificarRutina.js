import React from 'react'
import { useDispatch } from 'react-redux'
import { startEditRoutine } from '../../../actions/admin'
import { useForm } from '../../../hooks/useForm'
import { BackButton } from '../../ui/BackButton'
import { NavbarAdmin } from '../../ui/NavbarAdmin'



export const ModificarRutina = () => {
  const dispatch = useDispatch();

//  DECLARAMOS EL INITIALSTATE
const initialState = {
  idRutina: '1',
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
const [createRutinaForm, setCreateRutinaForm] = useForm(initialState);

const {idRutina, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription} = createRutinaForm;


//CREAMOS LA FUNCION PARA CREAR LA RUTINA
const handdleSubmitForm = (e) => {
  e.preventDefault();

  //DISPARAMOS LA ACCION PARA  CREAR LA RUTINA
  dispatch(startEditRoutine(idRutina, lunes, martes, miercoles, jueves, viernes, sabado, domingo, optionalDescription));
  
}



  return (
        <>
        
          <NavbarAdmin/>
            {/* FORMULARIO PARA CREAR USUARIO */}
            <div className=' form-group formAdmin row justify-content-center'>

            <h1 className='text-center '>EDITAR RUTINA</h1>

            <form onSubmit={handdleSubmitForm} >
                {/* ID DEL USUARIO */}
                <label>ID Rutina:</label>
                <input type="text" name='idRutina' className="form-control" placeholder='Inrtroduzca el ID del usuario:' value={idRutina} required onChange={setCreateRutinaForm}/>

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
                <textarea type="text-area" name='optionalDescription'   className='form-control' value={optionalDescription} onChange={setCreateRutinaForm}  />


                
               


                <button type='submit ' className='btn btn-lg btn-success text-center' >Editar Rutina</button>
            </form>


            <BackButton path={'/adminPanel'} title={'Volver al Panel de Administrador'}/>
            </div>
        </>



  )
}
