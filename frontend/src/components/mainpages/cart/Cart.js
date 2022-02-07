import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'


function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart

    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button > - </button>
                                <span>{product.quantity}</span>
                                <button> + </button>
                            </div>
                            
                            <div className="delete">         
                                X
                            </div>
                           
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: $ 0</h3>
               
            </div>
        </div>
    )
}

export default Cart
