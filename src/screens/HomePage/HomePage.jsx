import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer, ProductCard } from '../../components'
import "./HomePage.css"

const HomePage = () => {

    const { currentProducts } = useCustomContext()

    return (
        <div>
            <h1>Our Products</h1>
            <main>
                {currentProducts.length > 0
                    ?
                    currentProducts.map(producto => (
                        <ProductCard producto={producto} key={producto.id}></ProductCard>))
                    :
                    <h2>No se encuentra ningún producto con esa descripción</h2>
                }
            </main>
            <Footer />
        </div>
    )
}

export default HomePage