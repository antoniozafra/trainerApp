const baseUrl = process.env.REACT_APP_API_URL;


const fetchSinToken = (endpoint, data, method = 'GET') => {

const url = `${baseUrl}/${endpoint}`;
console.log(url)


//SI LA PETICION ES GET, DEVOLVEMOS LA RESPUESTA SIMPLEMENTE
if( method === 'GET'){
    return fetch(url);

}else{
    
    //sino devolvemos el fetch con la configuracion de los datos, añadimos method y condiguramos los header
    return fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json',
            
        },
        body : JSON.stringify(data)
    });
};


};


const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || "";
    
    
    //SI LA PETICION ES GET, DEVOLVEMOS LA RESPUESTA SIMPLEMENTE
    if( method === 'GET'){
        return fetch(url,{
            method,
            headers : {
                'x-token' : token

            }
        });
    
    }else{
        
        //sino devolvemos el fetch con la configuracion de los datos, añadimos method y condiguramos los header
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
                
            },
            body : JSON.stringify(data)
        });
    };
    
    
    }


//EXPORTAMOS LAS FUNCIONES
export {
    fetchSinToken, fetchConToken
}