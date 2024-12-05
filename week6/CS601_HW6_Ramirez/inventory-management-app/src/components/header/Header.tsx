import inventoryLogo from '../../assets/inventory-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div>
          <h1 id='title'>TechSphere</h1>
          <h5 id='subtitle'>Empowering Everyday Tech-solutions</h5>
        </div>
        <img id='logo' src={inventoryLogo} alt='Inventory Logo' />
      </div>
    </header>
  );
};

export default Header;
