import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'
import "./CarritoPage.css"

export const CarritoPage = () => {
    const { cart, getTotal } = useCustomContext()
    console.log(getTotal())
    return (
        <>
            <h2 className='carritoTitulo'>Your Cart: <b>{cart.length} items in cart</b></h2>

                {cart.length > 0 ?
                    <>
                        <div className='carrito'>
                            {cart.map(product => (
                                <ProductCartCard producto={product} key={product.id}></ProductCartCard>
                            ))}
                        </div>
                    </>
                    :
                    <h1>No has comprado nada aún</h1>
                }

            <div className='total'>
                <p >Total: <b>${getTotal()}</b></p>
            </div>
            <div className='btn-container'>
                <button>Buy it Now!</button>
            </div>
        </>
    )
}

