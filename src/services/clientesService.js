import END_POINT from './../constants/api_urls';


const clientesService = data => (

    data.map(cliente => (
        {
            nombre : cliente.nombre,
            apellido  : cliente.apellido,
        }
    ))


);


export default clientesService;