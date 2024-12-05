import { useLocation } from 'react-router-dom';
import { InventoryItemType } from '../../vite-env';

const ProductDetail = () => {
  const location = useLocation();
  const item = location.state?.item as InventoryItemType;

  if (!item) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>
        <strong>SKU:</strong> {item.SKU}
      </p>
      <p>
        <strong>Price:</strong> {item.price}
      </p>
      <p>
        <strong>In Stock:</strong> {item.qty}
      </p>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <img src={item.image} alt={item.name} />
    </div>
  );
};

export default ProductDetail;
