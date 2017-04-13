import express from 'express';
import config from '../config';
import middleware from '../middleware';
import library from '../controller/library';
import initializeDb from '../db';

let router = express();

initializeDb(db=>{
    router.use(middleware({config,db}));
    router.use('/library', library({config,db}));
});

export default router;