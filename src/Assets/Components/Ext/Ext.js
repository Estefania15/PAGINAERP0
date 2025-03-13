import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FormularioProducto from './FormularioProducto';
import TablaProductos from './TablaProductos';
import GráficoVentas from './GráficoVentas';
import './ButtonComponent.css';
import './GraphComponent.css';
import './FormularioProducto.css';
import './TablaProductos.css';
import './GráficoVentas.css';

const initialData = [
  { name: 'Ene', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Abr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

const RH = () => {
  const [products, setProducts] = useState([]);
  const [chartData, setChartData] = useState(initialData);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="RH">
      <h1>Dashboard ERP</h1>
      
      <FormularioProducto onAddProduct={handleAddProduct} />
      
      <TablaProductos products={products} />
      
      <GráficoVentas />
      
      <div className="dashboard">
        <h2>Gráfico de Ventas</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RH;
