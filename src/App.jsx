import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Pages/Home/Home'
import { Product } from './Pages/Home/Product/Product'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/addProduct' element={<Product/>}/>
      </Routes>
      
     </BrowserRouter>
    </>
  )
}

export default App
