import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Card, CardDeck } from "react-bootstrap"
import {Form, Button} from "react-bootstrap"

const Body = () =>   (
<div>
<div>
<h1 style={{marginLeft:`13rem`,
 fontSize:`3.5rem`, fontWeight: 600}}>
     Industry's first Autonomous <br /> 
     <span style={{color: `blue`, marginLeft:`8rem`}}>
         Learning Platform</span></h1>
</div>
<div style={{margin:`3rem`}}>
<CardDeck style={{ display:`inline-block`, marginTop:`3rem` }} >
  <Card  style={{ height: 700, width: 450, display: "inline-block" }}>
    <Card.Img variant="top" src="/images/images.jpg" style={{ height: 400, width: 450 }} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{ height: 700, width: 450, justifyContent:`center`, display: "inline-block"}}> 
    <Card.Img variant="top" src="/images/two.jpg" style={{ height: 400, width: 450 }} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card style={{ height: 700, width: 450, display: "inline-block", float:`right`}}>
    <Card.Img variant="top" src="/images/three.jpg" style={{ height: 400, width: 450 }} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardDeck>
</div>

<div style={{margin:`3rem`}}>
  <div style={{float: `right`, }}>
 <h1 style={{fontSize:`3rem`, fontWeight:700}}>Schedule for a<br /> <span style={{color:"blue"}}>KloudLearn</span> Demo</h1>
 <p>See how KloudLearn can help transform your<br /> enterprise training and provide an engaging<br />
 learning experience.</p>
 </div>  
  
  <div style={{height:`16rem` }}>
  <Form style={{width:`35rem`, }}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>

</div>


</div>


)

export default Body