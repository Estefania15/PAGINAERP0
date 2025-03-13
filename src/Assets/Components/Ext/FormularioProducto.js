import React, { useState } from 'react';
import './FormularioProducto.css';

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
    setProduct({ name: '', quantity: 0, price: 0 }); // Limpiar campos después de agregar
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

export default FormularioProducto;
