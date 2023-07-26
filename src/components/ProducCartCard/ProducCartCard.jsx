import React from 'react'
import "./ProducCartCard.css"

const ProductCartCard = ({ producto }) => {
    return (
        <div className='productCartCardContainer'>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt="Imagen del Producto en el carrito" />
            <h4>Precio: ${producto.precio}</h4>
            <p>Cantidad: {producto.quantity}</p>
        </div>
    )
}

export default ProductCartCard