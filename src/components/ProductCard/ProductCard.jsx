import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
    return (
        <Link to={"/detail/"+ producto.id} style={{textDecoration:"none"}}>
        <div className='productCardContainer'>

            <img src={producto.imagen} alt="Carta con Datos del Producto" />
            <h2>{producto.nombre}</h2>
            <h4> ${producto.precio}</h4>

        </div>
        </Link>
    )
}

export default ProductCard