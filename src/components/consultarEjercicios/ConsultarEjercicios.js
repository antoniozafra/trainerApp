import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startChecking } from '../../actions/auth';
import { fetchSinToken } from '../../helpers/fetch'
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar';




const getExercises = async() => {
  const resp = await fetchSinToken('exercises/', {}, 'GET');
  console.log(resp)

}

export const ConsultarEjercicios =  () => {
const dispatch = useDispatch();


  

//   useEffect(() => {
        
//     dispatch( startChecking() );

// }, [dispatch])


  return (
  
    <>
    <div className='container.fluid'>

    <Navbar/>
    <h1>BUSCAR EJERCICIOS</h1>
    
    </div>
    <BackButton path={'/'} title={'Volver'}/>
    
    </>


  )
}
