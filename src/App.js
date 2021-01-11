import './App.css';
import {Header} from './components/Header';
import { Routes, Route } from 'react-router-dom'
import {Home} from './components/Home';
import {About} from './components/About';
import {Product} from './components/Product';
import {Products} from './components/Products';
import {ProductDetail} from './components/ProductDetail';



function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="product" element={<Product />}>
            <Route path="/" element={<Products />} />
            <Route path=":id" element={<ProductDetail />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
