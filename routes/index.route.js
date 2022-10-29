import express from 'express';
import driversRoute from './drivers.route.js';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send({ greeting: 'Hi There!' })
})

routes.use('/drivers', driversRoute);

export default routes;