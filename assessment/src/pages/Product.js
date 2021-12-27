import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Menu from '../Components/Menu';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import './Product.css';

export default function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      baseURL: 'https://fakestoreapi.com',
      url: `/products/${productId}`
    })
      .then(({ data }) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="Product">
      <Menu />
      <div className="ProductInfo">
        <h2 className="ProductInfo__title">{product.title}</h2>
        <p>Category: {product.category}</p>
        <div className="ProductInfo__middle">
          <img
            className="ProductInfo__middle-image"
            src={product.image}
            alt=""
          />
          <div>
            <h3>Description:</h3>
            <p className="ProductInfo__middle-description">
              {product.description}
            </p>
          </div>
        </div>
        <p className="ProductInfo__price">
          Price: <span>$ {product.price}</span>
        </p>
        <div className="ProductInfo__bottom">
          <p className="ProductInfo__bottom-rate">
            rate: {product.rating.rate}/5
          </p>
          <p className="ProductInfo__bottom-count">
            {' '}
            count:{product.rating.count}{' '}
          </p>
          <button
            className="Product__bottom-back"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
