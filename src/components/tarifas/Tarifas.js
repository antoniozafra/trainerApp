import React from 'react';
import { NavbarLogin } from '../ui/NavbarLogin';

export const Tarifas = () => {
  return (
    <>

      
      <NavbarLogin/>

      <div className="container">
      <div className="card-deck mb-3 text-center">
          {/*COLUMNA DE INICIACION */}
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Iniciación</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">10€ <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
             
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">INSCRIBIRME</button>
          </div>
        </div>

        {/*COLUMNA DE AVANZADO */}
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Avanzado</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">20€ <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
                <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">INSCRIBIRME</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Profesional</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">30€ <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
            <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
              <li>CARACTERISTICA 1</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">INSCRIBIRME</button>
          </div>
        </div>

      </div>
      </div>




</>

    

  )
}
