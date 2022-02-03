import React, {useContext, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function DetailProduct() {
  const params = useParams()
  console.log(params)
  return(
      <div>
          Details Pro
      </div>
  )
}

export default DetailProduct;
