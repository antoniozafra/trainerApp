import React, { useEffect, useLayoutEffect } from 'react'
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar';





export const ConsultarRutinas = () => {
  // const rutinas = useEffect(async () => {
  //   return console.log('Hola')
  // }, []);


  // console.log(rutinas)



  



  return (
    <>
        <div className='container.fluid'>
            <Navbar/>
<h1>CONSULTABDO RUTINAS</h1>


            <BackButton path={'/'} title={'Volver'}/>
        </div>
    </>



  )
}
