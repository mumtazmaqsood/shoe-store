import './App.css';
import {Header} from './components/Header';
import { Routes, Route } from 'react-router-dom'
import {Home} from './components/Home';
import {About} from './components/About';
import {Product} from './components/Product';
import {Products} from './components/Products';
import {ProductDetail} from './components/ProductDetail';
import { useState, useEffect } from 'react'


function App() {
  
  const [objData, setObjData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setObjData(data))
        }
        fetchData();
    }, [])
    
    
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="product" element={<Product />}>
            <Route path="/" element={<Products productData={objData}/>} />
            <Route path=":id" element={<ProductDetail detailData={objData}/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
