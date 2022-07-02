import React from 'react'
import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Lama</h1>
            <p className="pl-desc">
                Lama is a creative portfolio that your work has been waiting for,
                Beautiful homes, stunning portfolio styles & a whole log more inside.
            </p>
        </div>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default ProductList