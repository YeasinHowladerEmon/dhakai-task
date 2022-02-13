import React from "react";
import { Col, Button } from "react-bootstrap";
import '../Share/AllStyle/Product.css';

const Product = (props) => {
  const {
    meta: { banners, companyName, logo },
    addresses,
    productGroups,
    minOrderQty
  } = props.products;
  return (
      <>
      <Col lg={3} md={4} sm={12}>
        <div className="card-desc">
          <div className="images-div">
           {
               banners.map((banner, index) =>  <img key={index} src={banner.url} alt={banner.url} />)
           }
          </div>
          <div className="logo">
            <img src={logo.url} alt={logo.url} />
          </div>
          <div className="card-bodys">
            <h4>{companyName}</h4>
            <div>
              <p>
                <span>{addresses[0].city},{" "}{addresses[0].country}</span>
                <div className="coma"></div> <span className="min-qty">Min Qty: {minOrderQty}</span>
              </p>
              <p className="product-group">
                {
                    productGroups.map((pg, index)=> <span  key={index}>{pg.name}{" "}</span>)
                }
              </p>
            </div>
            <Button>View Details</Button>
          </div>
        </div>
      </Col>
      </>
  );
};

export default Product;
