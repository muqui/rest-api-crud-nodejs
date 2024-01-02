const express = require('express');
const router = express.Router();

const respuesta = require('../../red/respuestas')
const controlador = require('./index');
//const { eliminar } = require('../../DB/mysql');

router.get('/', todos);
router.get('/:id', uno)
router.post('/', agregar)
router.delete('/', eliminar);

 async function todos(req,res, next){
    try{
        const items =  await controlador.todos()
    respuesta.success(req, res, items, 200)  
    }catch(err){
        next(err); 
    }   
};

async function uno(req,res, next){
    try{
        const items =  await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200)  
    }catch(err){
        next(err); 
    }   
};

async function agregar(req,res, next){
    try{
        const items =  await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Item guardado con exito'
        }else{
            mensaje = 'Item actualizado con exito'
        }
        respuesta.success(req, res, mensaje, 201)  
    }catch(err){
       next(err);
    }   
};
async function eliminar(req,res, next){
    try{
        const items =  await controlador.eliminar(req.body);
        respuesta.success(req, res, 'item eliminado ', 200)  
    }catch(err){
       next(err);
    }   
};
module.exports = router;