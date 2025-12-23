import express from 'express';
import mocksRouter from './routes/mocks.router.js'

const app= express();

app.use(express.json());

app.use('/api/mocks', mocksRouter);

app.listen(8080, ()=>console.log('Servidor escuchando en el puerto 8080'))