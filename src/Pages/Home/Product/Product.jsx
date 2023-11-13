import React from 'react'
import {useState} from 'react'
import { Navbar } from '../../../Components/Navbar/Navbar'
import './Product.css'
import axios from 'axios'

export const Product = () => {
    const[productName,setProductName]=useState("")
    const[productImage,setProductImage]= useState("")
    const[productDescription,setProductDescription]=useState("")
    const[productMaterial,setProductMaterial]=useState("")
    const addProduct=async(e)=>{
      e.preventDefault()
     let response=  await axios.post("https://654a248ee182221f8d529899.mockapi.io/products",{
            ProductName: productName,
            ProductImage:productImage,
            ProductDescription:productDescription,
            ProductMaterial:productMaterial

        })
        console.log(response)
    }
  return (
    <>
        <Navbar/>
        <div class="container">
        <h2>Product Information</h2>
        <form onSubmit={addProduct}>
            <div class="form-group">
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" onChange={(e)=>{setProductName(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="productImage">Product Image:</label>
                <input type="text" id="productImage" name="productImage" onChange={(e)=>{setProductImage(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="productDescription">Product Description:</label>
                <input type="text" id="productDescription" name="productDescription" onChange={(e)=>{setProductDescription(e.target.value)}} required/>
            </div>
            <div class="form-group">
                <label for="productMaterial">Product Material:</label>
                <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>{setProductMaterial(e.target.value)}}/>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
    </>
  )
}
