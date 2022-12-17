import { Box, Button, Grid, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct'
import Cookies from "js-cookie"

function Products() {

  const [products, setProducts] = useState([])

  const updateProduct = async (id, product) => {
    const response = await fetch(`https://reliance-3bcw.onrender.com/appliance/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token': Cookies.get('token')
      },
      body: JSON.stringify(product)
    });
    const data = await response.json();

    setProducts(products.map((product) => product._id === id ? data.data : product))
  }

  const deleteProduct = async (id) => {
    await fetch(`https://reliance-3bcw.onrender.com/appliance/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': Cookies.get('token')
      }
    });
    setProducts(products.filter((product) => product._id !== id))
  }

  const addProduct = async (product) => {
    let formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('category', product.category);
    for (let i = 0; i < product.images.length; i++) {
      formData.append('images', product.images[i]);
    }
    const response = await fetch('https://reliance-3bcw.onrender.com/laptop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': Cookies.get('token')
      },
      body: formData
    });
    const data = await response.json();
    console.log(data);
  }


  const getProducts = async () => {
    const response = await fetch(`https://reliance-3bcw.onrender.com/laptop`);
    const data = await response.json();
    console.log(data)
    setProducts(data);
    
  }

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <Box p={4}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Heading as="h2" size="lg" mb={4}>
          Products
        </Heading>
        <AddProduct type="add" addProduct={addProduct} />
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {
          products.map((product) => (
            <SingleProduct key={product._id} product={product.img1} price={product.MRP} title={product.name} brand={product.brand} updateProduct={updateProduct} deleteProduct={deleteProduct} addProduct={addProduct} />
          ))
        }
      </Grid>
    </Box>
  )
}

export default Products