import { InventoryItemType } from '../../vite-env';
import './InventoryItem.css';

const InventoryItem = ({ item }: { item: InventoryItemType }) => {
  return (
    <div className='card'>
      <h3 className='card-title'>{item.name}</h3>
      <div className='card-content'>
        <p>
          <strong>SKU:</strong>
          {item.SKU}
        </p>
        <p>
          <strong>Price:</strong> {item.price}
        </p>
        <p>
          <strong>In stock:</strong>
          {item.qty}
        </p>
      </div>
    </div>
  );
};

export default InventoryItem;
