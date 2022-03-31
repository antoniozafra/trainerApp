import React from 'react'
import { BackButton } from '../ui/BackButton'
import { Navbar } from '../ui/Navbar'

export const ConsultarRecetas = () => {
  return (
    <>
    
  <div className='container.fluid'>
    <Navbar/>

    <h1>CONSULTAR RECETAS</h1>

    <BackButton path={'/'} title={'Volver'}/>
</div>
    </>



  )
}
