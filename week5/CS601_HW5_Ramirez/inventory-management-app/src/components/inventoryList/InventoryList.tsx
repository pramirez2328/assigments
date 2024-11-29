import inventoryData from '../../data/inventory.json';
import { useEffect, useState } from 'react';
import { InventoryItemType } from '../../vite-env';
import InventoryItem from '../inventoryItem/InventoryItem';

const InventoryList = () => {
  const [inventory, setInventory] = useState<InventoryItemType[]>([]);
  useEffect(() => {
    if (!inventoryData) return;
    setInventory(inventoryData);
  }, []);

  return (
    <div>
      {inventory.map((item) => (
        <InventoryItem key={item.SKU} item={item} />
      ))}
    </div>
  );
};

export default InventoryList;
