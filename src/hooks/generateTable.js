import React from 'react'

export const generateTableUsers = (data) => {
let html = '<tr><th>Id Usuario</th> <th>Correo</th> <th>Nombre</th></tr><br></br>';

if(data.length === 0){
return "<p>No hay rutinas disponibles</p>";
}



data.forEach(element => {

html = html + `<tr><td>${element._id}</td><td>${element.email}</td><td>${element.name}</td></tr><br></br>`;

    
});



     return html;
            

};



export const generateTableDietas = (data) => {
    let html = '<tr><th>Id Usuario</th> <th>Lunes</th> <th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domindo</th><th>Opcional</th></tr><br></br>';
    
    if(data.length === 0){
    return "<p>No hay Dietas disponibles</p>";
    }

    console.log(data)
    
    
    
    data.forEach(element => {
    
    html = html + `<tr>
    <td>${element._id}</td>
    <td>${element.lunes}</td>
    <td>${element.martes}</td>
    <td>${element.miercoles}</td>
    <td>${element.jueves}</td>
    <td>${element.viernes}</td>
    <td>${element.viernes}</td>
    <td>${element.sabado}</td>
    <td>${element.domingo}</td>
    <td>${element.optionalDescription}</td>
    </tr><br></br>`;
    
        
    });
    
    
    
         return html;
                
    
    }
    
export const generateTableRoutines = (data) => {
    let html = '<tr><th>Id Usuario</th> <th>Lunes</th> <th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domindo</th><th>Opcional</th></tr><br></br>';
    
    if(data.length === 0){
    return "<p>No hay rutinas disponibles</p>";
    }

    console.log(data)
    
    
    
    data.forEach(element => {
    
    html = html + `<tr>
    <td>${element._id}</td>
    <td>${element.lunes}</td>
    <td>${element.martes}</td>
    <td>${element.miercoles}</td>
    <td>${element.jueves}</td>
    <td>${element.viernes}</td>
    <td>${element.viernes}</td>
    <td>${element.sabado}</td>
    <td>${element.domingo}</td>
    <td>${element.optionalDescription}</td>
    </tr><br></br>`;
    
        
    });
    
    
    
         return html;
                
    
    }
    
export const generateTableRecetas = (data) => {
    let html = '<tr><th>Nombre</th> <th>Tipo de Receta</th> <th>Pasos</th><th>Tiempo Estimado</th><th>Nivel de Dificultad</th><th>Ingredientes</th><th>Imagen</th></tr><br></br>';
    
    if(data.length === 0){
    return "<p>No hay rutinas disponibles</p>";
    }

    console.log(data)
    
    
    
    data.forEach(element => {
    
    html = html + `<tr>
    <td>${element.nombre}</td>
    <td>${element.tipoReceta}</td>
    <td>${element.pasos}</td>
    <td>${element.tiempoEstimado}</td>
    <td>${element.nivelDificultad}</td>
    <td>${element.ingredientes}</td>
    <td>${element.imagen}</td>
    </tr><br></br>`;
    
        
    });
    
    
    
         return html;
                
    
    }
export const generateTableEjercicios = (data) => {
    let html = '<tr><th>Nombre</th> <th>Zona Muscular</th> <th>Pasos</th><th>Nivel de Dificultad</th><th>Imagen</th></tr><br></br>';
    
    if(data.length === 0){
    return "<p>No hay rutinas disponibles</p>";
    }

    console.log(data)
    
    
    
    data.forEach(element => {
    
    html = html + `<tr>
    <td>${element.nombre}</td>
    <td>${element.zonaMuscular}</td>
    <td>${element.pasos}</td>
    <td>${element.nivelDificultad}</td>
    <td>${element.imagen}</td>
    </tr><br></br>`;
    
        
    });
    
    
    
         return html;
                
    
    }
    
