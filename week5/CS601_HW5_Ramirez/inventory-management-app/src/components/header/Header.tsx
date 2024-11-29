import inventoryLogo from '../../assets/inventory-logo.jpg';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <img id='logo' src={inventoryLogo} alt='Inventory Logo' />
        <h1 id='title'>TechSphere</h1>
        <h5 id='subtitle'>Empowering Everyday Technology Solutions</h5>
      </div>
    </header>
  );
};

export default Header;
