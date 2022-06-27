import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const Brewing = () => {
  const params = useParams();
  const [product, setProduct] = React.useState([]);
  const productApi = `https://api.openbrewerydb.org/breweries/banjo-brewing-fayetteville`;
  React.useEffect(() => {
    fetch(productApi)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [params]);
  return (
    <>
      {product && (
        <Card.Body className="card" key={product.id}>
          <Card.Subtitle className="title">
            Welcome {product.name}
          </Card.Subtitle>
          <Card.Text>{product.state}</Card.Text>
          <Card.Text>{product.country}</Card.Text>
          <Card.Text>{product.postal_code}</Card.Text>
          <Card.Text>{product.phone}</Card.Text>
          <Card.Text>{product.updated_at}</Card.Text>
        </Card.Body>
      )}
    </>
  );
};

export default Brewing;
