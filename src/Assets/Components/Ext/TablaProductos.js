import React from 'react';
import './TablaProductos.css';

const TablaProductos = ({ products }) => {
return (
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
    </div>
);
};

export default TablaProductos;
