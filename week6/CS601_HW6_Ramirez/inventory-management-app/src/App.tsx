import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Inventory from './components/inventoryList/InventoryList';
import Footer from './components/footer/Footer';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import ProductDetail from './components/productDetail/ProductDetail';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          {/* Define routes for each component */}
          <Route path='/' element={<Inventory />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
