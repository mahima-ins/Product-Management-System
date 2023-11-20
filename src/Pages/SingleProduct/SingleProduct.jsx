import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './SingleProduct.css'
import { useParams, } from 'react-router-dom'
import  axios  from 'axios'

export const SingleProduct = () => {
  
  const {id}=useParams()
  const[product, setProduct]=useState({})
  const fetchSingleProduct=async()=>{
   const response= await axios.get("https://654a248ee182221f8d529899.mockapi.io/products/" + id)
   setProduct(response.data)
  }
  useEffect(()=>{
  fetchSingleProduct()
  },[])
  // console.log(product)
  
return (
    <>
    <Navbar/>
      <div className='card'>
      <img src={product.ProductImage}alt="Product Image"/> 
  <h2 className="product-name">{product.ProductName}</h2>
  <p className="product-description">{product.ProductDescription}</p>
 <mark> {product.ProductMaterial}</mark>

      </div>   
   
   </>
  )
}
