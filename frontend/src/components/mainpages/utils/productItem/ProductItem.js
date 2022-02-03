import React from 'react'
import BtnRender from './BtnRender'
import {Link} from 'react-router-dom'

function ProductItem({product}) {
    console.log(product)
    return (
        <div className="product_card">
           
           <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            <div className='row_btn'>
                 <Link id="btn_buy" to="#!">
                     Buy
                 </Link>
                  <Link id="btn_view" to={`detail/${product._id}`}>
                     view
                 </Link>
            </div>

        </div>
    )   
}

export default ProductItem