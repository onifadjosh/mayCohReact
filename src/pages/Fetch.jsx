import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Fetch = () => {
  const [allProducts, setallProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [filteredProducts, setfilteredProducts] = useState([])
  //   const makeRequest = async () => {
  //     let url = "https://fakestoreapi.com/products";
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data)
  //     setallProducts(data)
  //   };

  //   useEffect(() => {
  //     makeRequest();
  //   }, []);

  const makeRequest = async () => {
    let url = "https://fakestoreapi.com/products";
    let response = await axios.get(url);
    console.log(response.data);
    setisLoading(false);
    setallProducts(response.data);
    filterJwe(response.data)
  };

  useEffect(() => {
    makeRequest();

  }, []);



  const filterJwe=(products)=>{
   let jewelery= products.filter((product)=>(
      // console.log(product)
     product.category === 'jewelery'
    ))

    setfilteredProducts(jewelery)

    //filter products according to category
    

  }

  const deleteProduct=(product)=>{
    let newProduct = [...filteredProducts]
    newProduct.splice(product, 1)
    console.log(newProduct)
    setfilteredProducts(newProduct)
    // console.log(product)
  }
  return (
    <div className="d-flex flex-wrap gap-3">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        filteredProducts.map((product, index) => (
          <div key={index} >
            {/* <h1>{product.title}</h1> */}

            <Card product={product} deleteProduct={deleteProduct} index={index}/>
          </div>
        ))
      )}
      {/* <button onClick={makeRequest}>sign in</button> */}
    </div>
  );
};

export default Fetch;
