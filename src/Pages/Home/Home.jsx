
import { useEffect,useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'


export const Home = () => {
  const [products, setProducts]=useState([])
  const fetchProducts = async ()=>{
    const response =   await axios.get("https://654a248ee182221f8d529899.mockapi.io/products")
    setProducts(response.data)
  }
  useEffect(()=>{
    fetchProducts() 
},[])
console.log(products)
  return (
    <>
    <Navbar/>
     {
      products.map((obj1)=>{
        return(
          <div key={obj1.id} className='card'>
   <img src={obj1.ProductImage}alt="Product Image"/> 
  <h2 className="product-name">{obj1.ProductName}</h2>
  <p className="product-description">{obj1.ProductDescription}.</p>
</div>
        )
      })
      }
     
  
    </>
    )
  
}