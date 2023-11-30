import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Pages/Home/Home'
import { Product } from './Pages/Home/Product/Product'
import { SingleProduct } from './Pages/SingleProduct/SingleProduct'
import { EditProduct } from './Pages/EditProduct/EditProduct'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/addProduct' element={<Product/>}/>
        <Route path ='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route path='/editProduct/:id' element={<EditProduct/>}/>
      </Routes>
      
     </BrowserRouter>
    </>
  )
}

export default App
