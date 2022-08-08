import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import ProductRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', ProductRoutes)

try {
    db.authenticate()
    console.log('conexion exitosa a la db');
} catch (error) {
    console.log('El error de conexión es:');
}

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.listen(8000, () => {
    console.log('Server ip running in http://localhost:8000');
})