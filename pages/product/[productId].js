import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar'

const ProductItem = () => {

    
    const [product, setProduct] = useState([])
    const {query : {productId}} = useRouter()
    
    useEffect(() => {
      if (productId) {
        window
          .fetch(`/api/avo/${productId}`)
          .then((response) => response.json())
          .then((data) => setProduct(data))
      }
    }, [productId])
    console.log(product)

    return (
        <div>
           <Navbar />
      <h1>Product page: </h1>
      <div>{product.name}</div>
      <img src={product.image} width={200} height={200}></img> 
        <div>{product?.attributes?.description}</div>
        </div>
    )
}

export default ProductItem
