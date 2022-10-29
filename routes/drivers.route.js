import express from 'express';

const driversRoute = express.Router();

driversRoute.get('/:id');
driversRoute.post('/');
driversRoute.put('/:id');
driversRoute.delete('/:id');

export default driversRoute;