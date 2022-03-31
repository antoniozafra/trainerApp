import React from 'react'
import { NavbarLogin } from '../ui/NavbarLogin'

export const Contacto = () => {
  return (

    <>
<NavbarLogin/>

    <section className="Material-contact-section section-padding section-dark">
    <div className="container ">
        <div className="row">
            {/* <!-- Section Titile --> */}
            <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                <h1 className="section-title text-center">Deja tu Mensaje. estamos encantados de Atenderte</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">

              <div className="find-widget">
               Nombre:  <a href="https://hostriver.ro">TrainerApp</a>
              </div>
              <div className="find-widget">
               Dirección: <a href="#">La Rambla, Córdoba</a>
              </div>
              <div className="find-widget">
                Teléfono:  <a href="#">+ 654-545-999</a>
              </div>
              
              <div className="find-widget">
                Correo:  <a href="https://uny.ro">trainerapp@gmail.com</a>
              </div>
              
            </div>
            {/* <!-- FORMULARIO DE CONTACTO --> */}
            <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                    {/* <!-- NOMBRE DEL USUAREIO --> */}
                    <div className="form-group label-floating">
                      <label className="control-label" >Nombre</label>
                      <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                      <div className="help-block with-errors"></div>
                    </div>
                    {/* <!-- CORREO ELECTRONICO DEL USUARIO --> */}
                    <div className="form-group label-floating">
                      <label className="control-label" >Correo</label>
                      <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                      <div className="help-block with-errors"></div>
                    </div>
                    {/* <!-- SUJETO DEL MENSAJE --> */}
                    <div className="form-group label-floating">
                      <label className="control-label">¿Qué necesitas?</label>
                      <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                      <div className="help-block with-errors"></div>
                    </div>
                    {/* <!-- MENSAJE DEL USUSARIO --> */}
                    <div className="form-group label-floating">
                        <label  className="control-label">Describe tu mensaje: </label>
                        <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    {/* <!-- ENVIO DEL FORMULARIO --> */}
                    <div className="form-submit mt-5">
                        <button className="btn btn-success btn-lg" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Enviar Mensaje</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>

  </>

  )
}
