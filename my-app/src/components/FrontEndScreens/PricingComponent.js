import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, Container } from "react-bootstrap";


export default class PricingComponents extends Component {
    render() {
        return (
            <Container>
            <CardGroup>
<Card1/>
<Card2/>
<Card3/>      
        
          </CardGroup>
           </Container>
        );
    }
}


class Card1 extends Component {
    render(){
        return(
            <Card>              
            <Card.Body>
              <Card.Title>Basic</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         
        
        );
    }
}

class Card2 extends Component {
    render(){
        return(
            <Card>              
            <Card.Body>
              <Card.Title>Professional</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         
        
        );
    }
}


class Card3 extends Component {
    render(){
        return(
            <Card>              
            <Card.Body>
              <Card.Title>Master</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         
        
        );
    }
}

 