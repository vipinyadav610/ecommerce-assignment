import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Layout, Icon, Badge } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem, getItem } from "Utils/Storage";
import { filterCartCount } from "../../redux/selectors";
import "./Header.scss";

const { Header } = Layout;

@withRouter
@connect(store => ({
  count: filterCartCount(store)
}))
class AppHeader extends Component {
  onCartClick = () => {
    this.props.history.push("/cart");
  };
  onLogoClick = () => {
    this.props.history.push("/productlist");
  };
  render() {
    return (
      <Header className="header-wrapper">
        <div className="header-content">
          <div className="page-logo" onClick={this.onLogoClick}>
            logo
          </div>
          <div onClick={this.onCartClick} className="cart-wrapper">
            <Badge
              count={this.props.count}
              className="cart-badge"
              style={{
                backgroundColor: "#fff",
                color: "#999"
              }}
            >
              <Icon type="shopping-cart" className="product-cart" />
            </Badge>
          </div>
        </div>
      </Header>
    );
  }
}

AppHeader.propTypes = {};

export default AppHeader;
