import { useLocation } from 'react-router-dom';
import Nav from './Nav'; 


export default function ProductDelivery() {
  const location = useLocation();
  const product = location.state?.product; 

  return (
    <div>
      
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' alt={product.name} />
          <h2>Delivery Instructions</h2>
          <p>The product will be delivered in less than 24 hours.</p>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}
