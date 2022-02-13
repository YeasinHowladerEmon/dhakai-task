import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [initialData, setInitialData] = useState(4);
  const [counts, setCounts] = useState(0);


  useEffect(() => {
    axios
      .get(`https://devapi.dhakai.com/api/v2/manufacturers`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN1}`
        },
        params: {
          limit: initialData
        }
      })
      .then((res) => {
        console.log(res.data.result);

        setCounts(res.data.result);
        setProduct(res.data.result.manufacturers);
      })
      .catch((error) => console.error(error));
  }, [initialData]);

  const scrollToEnd = () => {
    if (initialData >= 12) {
      console.log("hoyse")
      setInitialData(initialData);
    } else {
      console.log("hoynai")
      setInitialData(initialData + 4);
    }
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="homeMain mt-5">
      <Container className="align-items-center container">

        <h1>Product Count : {counts.count}</h1>
        <Row>
          {product.map((products) => (
            <Product products={products} key={products._id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
