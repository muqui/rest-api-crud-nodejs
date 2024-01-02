exports.success = function(req, res, mensaje = '', status = 200){
    const mensajeOK = mensaje || '';
    res.status(status).send({
        error: false,
        status : status,
        body: mensajeOK
    });
} 

exports.error = function(req, res, mensaje='Error interno', status = 500){
    
    res.status(status).send({
        error: false,
        status : status,
        body: mensajeError
    });
}