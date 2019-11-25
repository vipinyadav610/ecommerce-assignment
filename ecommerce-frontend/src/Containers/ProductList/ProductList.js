import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductCard from "Components/ProductCard";
import { connect } from "react-redux";
import { Spin } from "antd";
import * as Actions from "../../redux/actions/product";
import "./ProductList.scss";

@connect(
  store => ({
    loading: store.product.loading,
    products: store.product.products
  }),
  Actions
)
class ProductList extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    return (
      <Spin tip="Loading..." spinning={this.props.loading}>
        <div className="product-list">
          {this.props.products.map(product => {
            return (
              <ProductCard
                {...product}
                key={product.id}
                addProductToCart={this.props.addProductToCart}
              />
            );
          })}
        </div>
      </Spin>
    );
  }
}

ProductList.propTypes = {};

export default ProductList;
