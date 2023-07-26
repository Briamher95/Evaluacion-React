import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import "./Counter.css"

const Counter = ({ initialValue, stock, id }) => {
    const { addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)

    const onClickAddProduct = () => {
        addProductCart(id, quantity)
        alert('Se añadió correctamente el producto')
    }

    return (
        <div className='contadorContainer'>
            <h3>How much:</h3>
            <div className='contador'>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button className='btn-confirmar' onClick={onClickAddProduct}>Confirm</button>
        </div>
    )
}

export default Counter