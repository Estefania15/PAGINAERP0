// Importaciones
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


// Importar las rutas de productos
import productoRoutes from './routes/producto.routes.js';

// Configurar variables de entorno
dotenv.config();

// Crear app de express
const app = express();
const PORT = process.env.PORT || 1900;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productoRoutes);

// Mensaje para saber que inició
console.log("🔥 Iniciando servidor...");

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
});
