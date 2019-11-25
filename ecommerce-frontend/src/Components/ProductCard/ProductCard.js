import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "antd";
import "./ProductCard.scss";

const { Meta } = Card;

class ProductCard extends Component {
  render() {
    const { title, description, price, images, id } = this.props;
    return (
      <Card
        hoverable
        className="product-card"
        cover={<img alt="product image" src={images.length && images[0]} />}
      >
        <Meta title={title} description={description} />
        <div className="price-card">
          Price:
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "INR"
          }).format(price)}
        </div>
        <div className="btn-addtocart">
          <Button
            onClick={() => this.props.addProductToCart(id)}
            type="primary"
          >
            Add to cart
          </Button>
        </div>
      </Card>
    );
  }
}

ProductCard.propTypes = {};

export default ProductCard;
