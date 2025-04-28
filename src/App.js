import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Assets/Login/Login.js";
//import { LogoutButton } from "./Assets/Logout/Logout.js";
import Profile from "./Assets/Profile/Profile.js";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider} from 'primereact/api';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Topbar from './Assets/Components/Topbar/Topbar';
import Dashboard from './Assets/Components/Dashboard/Dashboard';
import Fiscalizacion from "./Assets/Components/Fiscalizacion/Fiscalizacion.js";
import Ext from "./Assets/Components/Ext/Ext.js";
import Configuracion from "./Assets/Components/Configuracion/ConfigPage.js";
import RecursosHumanos from "./Assets/Components/RecursosHumanos/RecursosHumanos.js";
import Mensaje from './Assets/Components/Mensaje/Mensaje.js';
import './App.css';
// -------------------------
// COMPONENTES DE PRODUCTOS
// -------------------------

import './Assets/Components/Ext/FormularioProducto.css';
import './Assets/Components/Ext/TablaProductos.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const FormularioProducto = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', quantity: 0, price: 0 });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nombre del Producto"
        required
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Cantidad"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Precio"
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

const TablaProductos = ({ products }) => (
  <div className="table-container">
    <h2>Lista de Productos</h2>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.price}</td>
            <td>${product.quantity * product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {products.length > 0 && (
      <div className="grafica-container">
        <h3>Gráfica de Cantidades</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )}
  </div>
);

// ----------------------
// PÁGINA DE PRODUCTOS
// ----------------------

const ProductosPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:1900/api/products');
      console.log('Productos obtenidos:', res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Agregar un nuevo producto
  const addProduct = async (product) => {
    try {
      const res = await axios.post('http://localhost:1900/api/products', product);
      console.log('Producto agregado:', res.data); // Aquí para verificar la respuesta
      setProducts(prevProducts => [...prevProducts, res.data]); // Actualizar estado con el nuevo producto
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  // Cargar los productos al cargar la página
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Gestión de Productos</h1>
      <FormularioProducto onAddProduct={addProduct} />
      <TablaProductos products={products} />
    </div>
  );
};

// ----------------------
// APP PRINCIPAL
// ----------------------

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <PrimeReactProvider>
        <div className="App">
          {isAuthenticated ? (
            <>
              <Topbar />
              <Mensaje />
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Fiscalizacion" element={<Fiscalizacion />} />
                <Route path="/RecursosHumanos" element={<RecursosHumanos />} />
                <Route path="/Extra" element={<Ext />} />
                <Route path="/Configuracion" element={<Configuracion />} />
                <Route path="/Productos" element={<ProductosPage />} />
              </Routes>
              <Profile />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </PrimeReactProvider>
    </Router>
  );
}

export default App;
