import dotenv from 'dotenv';
dotenv.config();

import express, { ErrorRequestHandler } from 'express';
import router from './router';
import './infrastructure/cache/redis';
import { HttpStatus } from './constant/http';

const app = express();

app.get('/health-check', (_, res) => {
    res.json({ message: 'OK' });
});

app.use(express.json());

app.use('/api', router);

const errorHanlding: ErrorRequestHandler = (err, _, res, __) => {
    switch (err.message) {
        case 'Forbidden':
            return  res.status(HttpStatus.FORBIDDEN).json({ message: 'FORBIDDEN' });
        case 'NotFound':
            return  res.status(HttpStatus.NOT_FOUND).json({ message: 'NOT_FOUND' });
        case 'BadRequest':
            return  res.status(HttpStatus.BAD_REQUEST).json({ message: 'BAD_REQUEST' });
        default:
            return  res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
};

app.use(errorHanlding);

app.listen(8089, () => {
    console.log('Starting server at 8080 port');
});
