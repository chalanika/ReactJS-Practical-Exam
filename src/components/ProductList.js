import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../services/productService";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";
import Cart from "./Cart";

class ProductList extends Component {
  state = {
    products: [],
    filterBy: "all",
    open: false,
  };

  async componentDidMount() {
    try {
      const products = await getProducts();
      this.setState({ products: products.data });
    } catch (error) {
      console.log(error);
    }
  }

  handleFilter(size) {
    const filterBy = size;
    this.setState({ filterBy });
  }

  toggleDrawer(open) {
    this.setState({ open });
  }

  render() {
    const filteredProducts = this.state.products.filter((product) => {
      if (this.state.filterBy === "all") return product;
      return product.details.size === this.state.filterBy;
    });

    return (
      <Container fluid style={{ borderColor: "black", marginTop: 50 }}>
        <div className="d-flex flex-row-reverse">
          <IconButton aria-label="cart" onClick={() => this.toggleDrawer(true)}>
            <StyledBadge
              badgeContent={this.props.totalQuantity}
              color="secondary"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Drawer
            anchor="right"
            open={this.state.open}
            onClose={() => this.toggleDrawer(false)}
          >
            <div style={{ width: 450, marginTop: 10 }}>
              <Cart />
            </div>
          </Drawer>
        </div>
        <Row>
          <Col md={2}>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Sizes : </div>
            <div>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("xsmall")}
              >
                XS
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("small")}
              >
                S
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("medium")}
              >
                M
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("mlarge")}
              >
                ML
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("large")}
              >
                L
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("xlarge")}
              >
                XL
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: 7 }}
                onClick={() => this.handleFilter("xxlarge")}
              >
                XXL
              </Button>
            </div>
          </Col>
          <Col>
            <Row style={{ margin: 5 }}>
              {filteredProducts.length} Product(s) found.
            </Row>
            <Row>
              {filteredProducts &&
                filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    style={{ width: "18rem", margin: 5, padding: 5 }}
                  >
                    <Row>
                      <Col></Col>
                      <Col>
                        <div
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 5,
                          }}
                        >
                          {product.details.tag}
                        </div>
                      </Col>
                    </Row>
                    {!product.details.tag && (
                      <Row>
                        <Col></Col>
                        <Col>
                          <div
                            style={{
                              backgroundColor: "white",
                              color: "white",
                              height: 30,
                            }}
                          ></div>
                        </Col>
                      </Row>
                    )}

                    <Card.Img
                      variant="top"
                      src={product.details.image}
                      style={{ height: "50%" }}
                    />
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Body>
                      <Card.Text>${product.details.price}</Card.Text>
                    </Card.Body>

                    <Card.Footer
                      style={{
                        backgroundColor: "black",
                        cursor: "pointer",
                        color: "white",
                      }}
                      onClick={() => {
                        this.props.addToCart(product);
                      }}
                    >
                      Add to cart
                    </Card.Footer>
                  </Card>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalQuantity: state.totalQuantity,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
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

export default connect(mapStateToProps, mapDispachToProps)(ProductList);
