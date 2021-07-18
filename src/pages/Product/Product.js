import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import cart from '../../services/cartService';
import { formatPrice } from '../../utils/helper';
import productService from '../../services/productService';
import toastService from '../../services/toastService';

const Product = ({ user }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  },[]);

  async function fetchProducts() {
    const { data } = await productService.getProduct();
    setProduct(data.data);
  }

  function handleCartClick(data) {
    cart.add(data);
  }

  async function handleDelete(data) {
    const oldProduct = [...product];

    const newProduct = product.filter(row => row.id !== data.id);
    setProduct(newProduct);

    try {
      const { data: resData } = await productService.delProduct(data.id)
      toastService.success(resData.message);
    } catch({ response }) {
      toastService.error(response.data.message);
      setProduct(oldProduct);
    }
  }

  const column = [
    { label: 'Name', name: 'name', content: product => <Link to={`/products/${product.id}`}>{product.name}</Link> },
    { label: 'Category', name: 'category', content: product => product.category.name },
    { label: 'Price', name: 'price', content: product => formatPrice(product.price)},
    { label: 'Stock', name: 'stock' },
    { label: 'Actions', name: 'actions', 
      content: product =>  
        user ? <Button data={product} type="danger" onClick={handleDelete}>Delete</Button> : <Button data={product} onClick={handleCartClick}>Add To Cart</Button>
    },
  ];

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-3">Product Table</h4>
        <Link className="btn btn-primary btn-sm" to="/product/create">Insert Product</Link>
      </div>
      <Table
        column={column}
        data={product}
      />
    </React.Fragment>
  );
};

export default Product;