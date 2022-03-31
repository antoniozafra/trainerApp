import React from 'react'
import { defaultUrl } from '../trainer/TrainerScreen';
import { NavbarLogin } from '../ui/NavbarLogin';


export const Servicios = () => {
  return (
    <>

      
      <NavbarLogin/>
      <div className='container.fluid background'>


      <div className="container serviciosScreen">
      <div className="card-deck mb-3 text-center">
          {/*COLUMNA DE INICIACION */}
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">SERVICIO 1</h4>
          </div>
            <img className='img img-responsive' src={defaultUrl}></img>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
             
            </ul>
            {/* <button type="button" class="btn btn-lg btn-block btn-primary">INSCRIBIRME</button> */}
          </div>
        </div>

        {/*COLUMNA DE AVANZADO */}
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">SERVICIO 2</h4>
          </div>
          <img className='img img-responsive' src={defaultUrl}></img>
          <div className="card-body">

            <ul className="list-unstyled mt-3 mb-4">
                <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
            </ul>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">SERVICIO 3</h4>
          </div>
          <img className='img img-responsive' src={defaultUrl}></img>
          <div className="card-body">

            <ul className="list-unstyled mt-3 mb-4">
            <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
            </ul>
          </div>
        </div>

      </div>
      </div>
      </div>





</>



      

    

    )
}
