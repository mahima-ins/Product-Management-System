import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './EditProduct.css'

export const EditProduct = () => {
  return (
<>
<Navbar/>
        <div class="container">
        <h2>Product Information</h2>
<form >
            <div class="form-group">
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" />
            </div>
            <div class="form-group">
                <label for="productImage">Product Image:</label>
                <input type="text" id="productImage" name="productImage" />
            </div>
            <div class="form-group">
                <label for="productDescription">Product Description:</label>
                <input type="text" id="productDescription" name="productDescription" />
            </div>
            <div class="form-group">
                <label for="productMaterial">Product Material:</label>
                <input type="text" id="productMaterial" name="productMaterial" />
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        </div>
</>
  )
  }
        