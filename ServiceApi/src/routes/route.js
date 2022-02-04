'use strict';

import express from 'express';

const route = express.Router();

route.get('/', (req,res)=>{
    res.json({
        message:'ruta predeterminada'
    });
})

route.post('/location/:id', ( req, res )=>{
    console.log(req);
    console.log(res);
})

export default route;