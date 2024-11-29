import inventoryData from '../../data/inventory.json';
import { useEffect, useState } from 'react';
import { InventoryItemType } from '../../vite-env';
import InventoryItem from '../inventoryItem/InventoryItem';
import './InventoryList.css';

const InventoryList = () => {
  const [inventory, setInventory] = useState<InventoryItemType[]>([]);
  useEffect(() => {
    if (!inventoryData) return;
    setInventory(inventoryData);
  }, []);

  return (
    <>
      <h1 id='inventory-title'>Inventory</h1>
      <div id='items'>
        {inventory.map((item) => (
          <InventoryItem key={item.SKU} item={item} />
        ))}
      </div>
    </>
  );
};

export default InventoryList;
