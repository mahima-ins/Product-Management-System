import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './SingleProduct.css'
import { useNavigate, useParams, } from 'react-router-dom'
import  axios  from 'axios'

export const SingleProduct = () => {
  const navigate = useNavigate()
  
  const {id}=useParams()
  const[product, setProduct]=useState({})
  //delete product
  const DeleteProduct=async()=>{
   const response= await axios.delete("https://654a248ee182221f8d529899.mockapi.io/products/" + id)
   if(response.status==200){
    navigate('/')
   }
   else{
    alert("something went wrong!! try again")
   }
  }
  //fetch single product
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
 <mark> {product.ProductMaterial}</mark><br/>
 <button onClick={DeleteProduct}>Delete</button>
 <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>

      </div>   
   
   </>
  )
}
