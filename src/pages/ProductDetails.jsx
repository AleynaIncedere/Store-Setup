// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../utilities/useFetch';

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { get } = useFetch('https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/');
  const id = params.id;

  useEffect(() => {
    get(`productdetails/id${id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [get, id]);

  return (
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' alt={product.name} />
          <p>
            View 
            <span style={{ marginLeft: '5px' }}></span>
            <Link to={`/products/${id}/delivery`} state={{ product }}>
              delivery notes
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
