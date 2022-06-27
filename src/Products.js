import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("https://api.openbrewerydb.org/breweries").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  return (
    <div>
      <Card.Title className="head">Brewing Companies</Card.Title>
      {products.map((product) => {
        return (
          <Card.Body className="card" key={product.id}>
            <Card.Subtitle className="title">{product.name}</Card.Subtitle>
            <Card.Text>{product.state}</Card.Text>
            <Card.Text>{product.country}</Card.Text>

            <Link to={`/Brewing/${product.id}`}>Details</Link>
          </Card.Body>
        );
      })}
    </div>
  );
}
export default Products;

// <h1>Brewing Companies</h1>

{
  /* /* {products.map((product) => {
        return (
          <div class="card">
            <div className="card-body" key={product.id}>
              <h2 className="card-title">{product.name},</h2>
              <h4 className="card-text">{product.state},</h4>
              <h4 className="card-text">{product.country}.</h4>
            </div>
          </div>
        );
      })}
    </div> 
  ;
*/
}
