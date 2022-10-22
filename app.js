import express from 'express';
import pino from 'pino';
import middlewares from 'middlewares/index.middlewares.js'

const logger = pino(); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(middlewares);

app.listen(PORT, () => {
    logger.info(`APP is running on port ${PORT}`);
})