import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [allProducts, setallProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
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

    // const credentials = { username: "john_doe", password: "pass123" };
    // axios
    //   .post("https://fakestoreapi.com/auth/login", credentials)
    //   .then((response) => console.log(response.data));
  };

  useEffect(() => {
    makeRequest();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        allProducts.map((product, index) => (
          <div key={index}>
            <h1>{product.title}</h1>
          </div>
        ))
      )}
      {/* <button onClick={makeRequest}>sign in</button> */}
    </div>
  );
};

export default Fetch;
