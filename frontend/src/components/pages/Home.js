import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../products';
import Product from '../pages/Product';
// export default Home
function Home() {
  return (
    <div>
      <h2>Latest Products</h2>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} lg={4} md={6} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Home
