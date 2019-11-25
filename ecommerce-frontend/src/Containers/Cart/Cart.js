import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, Avatar, Button, Icon } from "antd";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions/product";
import { filterCart } from "../../redux/selectors";

@connect(
  store => ({
    cart: filterCart(store)
  }),
  Actions
)
class Cart extends Component {
  render() {
    return (
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={this.props.cart}
        renderItem={({ images, title, description, id }) => {
          return (
            <List.Item
              actions={[
                <Icon
                  onClick={() => this.props.removeProductToCart(id)}
                  style={{ fontSize: "16px" }}
                  type="delete"
                  theme="twoTone"
                  twoToneColor="red"
                />
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={images.length && images[0]} />}
                title={title}
                description={description}
              />
            </List.Item>
          );
        }}
      />
    );
  }
}

Cart.propTypes = {};

export default Cart;
