import React, { useEffect } from 'react';
import {useState} from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { BackButton } from '../ui/BackButton';
import { Navbar } from '../ui/Navbar';
import mantenerKcal from '../../assets/img/mantener_calorias.svg'
import bajarKcal  from '../../assets/img/bajar_calorias.svg'
import subirKcal from '../../assets/img/subir_calorias.svg'
import { useDispatch } from 'react-redux';
import { startChecking } from '../../actions/auth';


export const GestorKcal = () => {
const dispatch = useDispatch();



    useEffect(() => {
        
        dispatch( startChecking() );
    
    }, [dispatch])

    
    
    const [formLoginValues, handleLoginInputChange] = useForm(
        {age: '18', sex : 'Hombre', actividadFisica: 'Leve', altura: '170', peso: '70'}

        );
        
        // {age: '16', sex : 'Hombre', actividadFisica: 'leve', altura: '120', peso: '40'}
    const {age,actividadFisica, altura,peso} = formLoginValues;
    const [actividadFisicastate,setActividadFisica]=useState('Leve')
    const [sex,setSex]=useState('Hombre')




    const handdlesubmit = (e) => {
        e.preventDefault(e);
        // alert('CALCULANDO KCAL | PULSE ACEPTAR');
        if(age == ''){
            Swal.fire('Introduzca Edad')
        }
        const data =(generateData(age,sex,actividadFisica, altura,peso));

    } 


      const generateData = (age,sex,actividadFisica, altura,peso) => {
    
        let result = 10;
        if (sex =='Hombre'){
            // console.log('ESTAMOS EN GOMBRE')
            const dataHombre = 66.463+(13.751*peso)+(5.0033*altura)-(6.775*age);
            result = dataHombre;
            switch (actividadFisica) {
                case "Leve":
                    return result *1;

                    case "Normal":
                        return result *1.3;

                    case "Moderado":
                        return result *1.4;

                    case "Muy Activo":
                        return result *1.5;

            
                default:
                    alert('no se encontro')
                    break;
            }

            return result *1;
        }else{
            // console.log('ESTAMOS EN MUJER')
            const dataMujer = 66.463+(13.751*peso)+(5.0033*altura)-(4.775*age);
            result = dataMujer;
            switch (actividadFisica) {
                case "Leve":
                    return result *1;

                    case "Normal":
                        return result *1.3;

                    case "Moderado":
                        return result *1.4;

                    case "Muy Activo":
                        return result *1.5;

            
                default:
                    alert('no se encontro')
                    break;
            }

            return result *1.2;

        }



        return result;
      }

       

    //GENERAMOS LOS DATOS DE RETORNO AL DOCUMENTO HTML
    const data = Math.round(generateData(age,sex,actividadFisica, altura,peso));
        
    


    return (

<>
        {/*BARRA DE NAVEGACION */}
        <Navbar/>

     < div className = 'container  mb-5 gestorkcalForm '   >
         <h1 className='text-center'>INTRODUZCA DATOS</h1>

     {/*formulario para establecer las kcal recomendadas */}    
    <form onSubmit={handdlesubmit} onChange={handdlesubmit} className="sm-12" >

        {/*FORMULARIO GESTOR DE KCAL*/}
         < div className = "input-group mb-1" >
             
         {/*EDAD*/} 
        < input min='16' max='100' type ='number'  value={age}  onChange={handleLoginInputChange}   className = "form-control" name='age' id='age' placeholder = "Introduzca su edad" /> </div>
        
        {/*SEXO*/} 
        < div className = "form-check" >

            
            <label className="form-check-label"  id='sex'>Hombre</label>
                <input
                className="form-check-input"
                type="radio"
                checked
                onClick={() => setSex('Hombre')}
                value="hombre"
                onChange={handleLoginInputChange}
                name="sex"
                id="sex"/>

        </div>

     < div className = "form-check" >

            <label className="form-check-label"  id='sex'>Mujer</label>
                <input
                    className="form-check-input"
                    type="radio"
                    onClick={() => setSex('Mujer')}
                    onChange={handleLoginInputChange}
                    name="sex"
                    id="sex"
                    value="Mujer"
                    />

    </div>

        {/*NIVEL DE ACTIVIDAD FÍSICA*/}
        <label className="form-check-label">Nivel de Actividad</label>
        <div className="form-check nivelActividad">

        {/*LEVE*/}
            <input
                className="form-check-input"
                type="radio"
                checked="isCheked"
                value="Leve"
                onChange={handleLoginInputChange}
                name="actividadFisica"
                id="actividadFisica"
            
                />
            <label className="form-check-label"  id='actividadFisica'>
            Leve
            </label>


            <br></br>
            {/*Normal */}
            <input
                className="form-check-input"
                type="radio"
                value="Normal"
                onChange={handleLoginInputChange}
                name="actividadFisica"
                id="actividadFisica"
            
                />
            <label className="form-check-label"  id='actividadFisica'>
            Normal
            </label>

            <br></br>
            {/*MODERADO */}
            <input
                className="form-check-input"
                type="radio"
                value="Moderado"
                onChange={handleLoginInputChange}
                name="actividadFisica"
                id="actividadFisica"
            
                />
            <label className="form-check-label"  id='actividadFisica'>
            Moderado
            </label>

            <br></br>
            {/*Muy Activo */}
            <input
                className="form-check-input"
                type="radio"
                value="Muy Activo"
                onChange={handleLoginInputChange}
                name="actividadFisica"
                id="actividadFisica"
                />
            <label className="form-check-label"  id='actividadFisica'>
            Muy Activo
            </label>
        </div>



        {/*ALTURA*/}
         < label   className = "form-label titleLabel" > Altura</label>
          < input onChange = {handleLoginInputChange} type = "range" className = "form-range" min = "120" max = "220" step = "1" id = "altura" name='altura' />
           <span id="alturaText">{altura} cm</span>
           <br/>

        {/*PESO*/}
         < label  className = "form-label" > Peso</label>
          < input onChange = {handleLoginInputChange} type = "range" className = "form-range" min = "40" max = "200" step = "1" id = "peso" name="peso" />
           <span id="pesoText">{peso}kg</span>

    {/* <button className='btn btn-primary sendButton'>OBTENER RESULTADOS</button> */}
    </form>





    
    <div className="container.fluid ">
        <h1 className='text-center'>RESULTADOS </h1>

        <div className="row align-items-start kcalRecomendadas mb-5 text-center">
                <div className="col kcalColumResult ">
                    <img src={bajarKcal} className="img-fluid" alt="Responsive image"></img>
                    <p className='kcalText'>{data-500} - {data} Kcal </p>
                    <span className='footerTarget'>Consumiendo estas calorías saludablemente te permitirá bajar tu peso.</span>

                </div>


                <div className="col kcalColumResult">
                <img src={mantenerKcal} className="img-fluid" alt="Responsive image"></img>
                <p className="kcalText">{data} - {data+250} Kcal  </p>
                <span className='footerTarget'>Consumiendo estas calorías saludablemente te permitirá mantener tu peso.</span>
                </div>

                    <div className="col kcalColumResult">
                    <img src={subirKcal} className="img-fluid" alt="Responsive image"></img>
                    <p className='kcalText'>{data+250}-{data+500} Kcal </p>
                    <span className='footerTarget'>Consumiendo estas calorías saludablemente te permitirá subir tu peso.</span>

                    </div>

                    

        </div>


    </div> 
        <BackButton path={'/'} title={'Volver'} />
    </div>



</>



       

    )








}
      
     