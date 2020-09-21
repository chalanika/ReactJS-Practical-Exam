import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import { removeItem } from "../redux/cart/cartActions";

class Cart extends Component {
  render() {
    return (
      <Container>
        <div className="d-flex flex-row-reverse">
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={this.props.totalQuantity}
              color="secondary"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
        <Divider />
        {this.props.cart.map((product) => (
          <div>
            <Row key={product.id} style={{ marginBottom: 5, marginTop: 5 }}>
              <div className="col-4">
                <img
                  src={product.details.image}
                  alt="..."
                  height="100"
                  width="100"
                />
              </div>
              <div className="col-5">
                <div>
                  <p>{product.name}</p>
                </div>
                <div>
                  <p>Quantity:{product.quantity}</p>
                </div>
              </div>
              <div className="col d-flex flex-row-reverse">
                <p>
                  ${product.price.toFixed(2)}{" "}
                  <i
                    className="fas fa-times-circle"
                    onClick={() => {
                      this.props.removeItem(product);
                    }}
                  ></i>
                </p>
              </div>
            </Row>
            <Divider />
          </div>
        ))}
        <Row>
          <Col>
            <p style={{ fontWeight: "bold", color: "gray" }}>SUBTOTAL</p>
          </Col>
          <Col className="d-flex flex-row-reverse">
            <p style={{ fontWeight: "bold", color: "gray" }}>
              $ {this.props.subtotal.toFixed(2)}
            </p>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "black",
            justifyContent: "center",
            color: "white",
            padding: 2,
          }}
        >
          <p style={{ padding: 3, marginTop: 2 }}>CHECKOUT</p>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    subtotal: state.totalPrice,
    totalQuantity: state.totalQuantity,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    removeItem: (product) => {
      dispatch(removeItem(product));
    },
  };
};

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default connect(mapStateToProps, mapDispachToProps)(Cart);
