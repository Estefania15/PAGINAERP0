import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './GráficoVentas.css';

const data = [
{ name: 'Producto A', quantity: 30 },
{ name: 'Producto B', quantity: 20 },
{ name: 'Producto C', quantity: 50 },
{ name: 'Producto D', quantity: 15 },
];

const GráficoVentas = () => {
return (
    <div className="bar-graph-container">
    <h2>Gráfico de Cantidades</h2>
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
    </div>
);
};

export default GráficoVentas;
