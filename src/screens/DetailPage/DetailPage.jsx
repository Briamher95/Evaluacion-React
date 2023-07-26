import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import "./DetailPage.css"


const DetailPage = () => {

  const { id } = useParams()
  const { getProductById, addProductCart, isInCart, cart, getProductCartById } = useCustomContext()
  const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

  return (
    <>

      <h1>{productDetail.nombre}</h1>
      <div className='detailContainer'>

        <div className='detailImagePrice'>
          <img src={productDetail.imagen} alt="Imagen del producto Detallada" />
          <span> ${productDetail.precio}</span>
        </div>

        <div className='detailDescription'>
          <p><b>Description:</b>
          <br />
          <br />
          {productDetail.descripcion}</p>

          {
            isInCart(id)
              ?
              <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id} />
              :
              <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id} />
          }

        </div>
      </div>
    </>
  )
}

export default DetailPage