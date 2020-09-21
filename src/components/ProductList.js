import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { getProducts } from "../services/productService";
import {connect} from 'react-redux';
import { addCart } from "../redux/cart/cartActions";

class ProductList extends Component {
  constructor(props){
    super(props);
  };
  state = {
    products: [],
    filterBy: "all",
  };

  async componentDidMount() {
    try {
      const products = await getProducts();
      this.setState({ products: products.data });
      console.log(products.data);
    } catch (error) {
      console.log(error);
    }
  }

  handleFilter(size) {
    const filterBy = size;
    this.setState({ filterBy });
  }

  
  render() {
    const filteredProducts = this.state.products.filter((product) => {
      if (this.state.filterBy === "all") return product;
      return product.details.size === this.state.filterBy;
    });
    console.log(this.props.cart);
    return (
      <Container fluid style={{ borderColor: "black", marginTop: 50 }}>
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
                    <Col><div style={{backgroundColor:'black',color:"white"}} >{product.details.tag}</div></Col></Row>
                    
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
                      //onClick={this.props.addCart(product)}
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

const mapStateToProps = state =>{
  return{
      cart : state.cart
  }
}

const mapDispachToProps = dispatch => {
  return{
      addCart : product => dispatch(addCart(product)),
      
  }
} 

export default connect(mapStateToProps,mapDispachToProps)(ProductList);



