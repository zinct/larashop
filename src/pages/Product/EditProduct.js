import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Input from '../../components/common/Input';
import categoryService from '../../services/categoryService';
import productService from '../../services/productService';
import toastService from '../../services/toastService';

function CreateProduct(props) {
  const product = props.location.state.product;

  const [data, setData] = useState({
    name: product.name,
    category_id: product.category_id,
    price: product.price,
    stock: product.stock,
    status: product.status,
    description: product.description,
  });
  const [error, setError] = useState({});
  const [categories, setCategories] = useState([]);

  const status = [
    {name: 'Aktif', id: 1},
    {name: 'Tidak Aktif', id: 0},
  ];

  useEffect(() => {
    fetchCategories();
  },[]);

  async function fetchCategories() {
    const { data: resData } = await categoryService.getCategory();
    setCategories(resData.data);
  }

  function handleChange({ target }) {
    const newData = {...data};
    newData[target.name] = target.value;
    setData(newData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data: resData } = await productService.editProduct(product.id, data);
      toastService.success(resData.message);
      props.history.push('/product');
    } catch(err) {
      if(err.response.status === 422)
        setError(err.response.data.errors);
    }
  }

  return (
    <div className="card">
      <div className="card-header">Register Form</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nama</label>
            <Input name="name" value={data.name} error={error} placeholder="Masukan Nama" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Category</label>
            <Input type="select" name="category_id" value={data.category_id} error={error} placeholder="Pilih Category" optionData={categories} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <Input type="number" name="price" value={data.price} error={error} placeholder="Masukan Price" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock</label>
            <Input type="number" name="stock" value={data.stock} error={error} placeholder="Masukan Stock" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Status</label>
            <Input type="select" name="status" value={data.status} error={error} optionData={status} placeholder="Pilih Status" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <Input name="description" type="textarea" value={data.description} error={error} placeholder="Masukan Description" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
