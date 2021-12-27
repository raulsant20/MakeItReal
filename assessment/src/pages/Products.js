import axios from 'axios';
import { React, useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import Menu from '../Components/Menu';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import './Products.css';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      baseURL: 'https://fakestoreapi.com',
      url: '/products'
    })
      .then(({ data }) => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="Products">
      <Menu />
      <p>hola</p>
      <div className="Products__cards">
        {products.map(({ id, image, title }) => (
          <ProductCard id={id} iamge={image} title={title} key={id} />
        ))}
      </div>
    </div>
  );
}
