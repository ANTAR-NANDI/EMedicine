import React from 'react'
import { Button, Card } from 'react-bootstrap'
function Product({product}) {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <a href={`/details/${product._id}`}>
            <Card.Img src={product.image}/>
        </a>
      <Card.Body>
      <a href={`/product/${product._id}`}>
           <Card.Title>
                <h2>{ product.name }</h2>
            </Card.Title>
     </a>
        <Card.Text>
          Brand : { product.company }  <br/>
          Group : { product.group }

        </Card.Text>
        <Card.Text>
          Price : { product.price }

        </Card.Text>
        <Button variant="primary">Details </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
