import React from 'react';
const logoUrl = 'https://img1.freepng.es/20180825/ykq/kisspng-clip-art-vector-graphics-openclipart-computer-icon-github-logo-icon-free-of-typicons-5b816c4e65e780.8591620015352085264174.jpg'


export const NavbarLogin = () => {
    {/*RETORNAMOS EL ELEMENTO HTML QUE CONTIENE LA BARRA DE NAVEGACION DE "/LOGIN" */}
  return (
    <nav className="navbar navbar-expand-lg  bg-dark ">
  <div className="container-fluid ">
  <a className="navbar-brand text-light text-left " href="/login">
      <img src={logoUrl} alt="logo" width="100px" height="100px" className="d-inline-block align-text-top p-1"/>
      TrainerApp
    </a>
  
          {/* <a class="nav-link "  href="#">Home</a> */}
          <a className="nav-link text-white" href="/servicios">Servicios</a>
          <a className="nav-link text-white" href="/tarifas">Tarifas</a>
      <span className="navbar-text  text-light">
        <a href='/contacto' className='nav-link text-white'>Contacto</a>
      </span>
    
  </div>
</nav>
  )
}
