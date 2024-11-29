import Header from './components/header/Header';
import Inventory from './components/inventoryList/InventoryList';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Inventory />
      <Footer />
    </div>
  );
};

export default App;
