import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'


function Products() {
    const state = useContext(GlobalState)

    console.log(state)
  return (
      <div>
          Product Lists
      </div>
  )
}

export default Products;
