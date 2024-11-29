import inventoryData from '../../data/inventory.json';
import { useEffect, useState } from 'react';
import { InventoryItemType } from '../../vite-env';
import InventoryItem from '../inventoryItem/InventoryItem';
import './InventoryList.css';

const InventoryList = () => {
  const [inventory, setInventory] = useState<InventoryItemType[]>([]);
  // Load inventory data from JSON file
  useEffect(() => {
    if (!inventoryData) return;
    setInventory(inventoryData);
  }, []);

  return (
    <main>
      <h1 id='inventory-title'>Inventory</h1>
      <div id='items'>
        {inventory.map((item) => (
          // Pass each item to InventoryItem component
          <InventoryItem key={item.SKU} item={item} />
        ))}
      </div>
    </main>
  );
};

export default InventoryList;
