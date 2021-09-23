/**
 * https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC/
 * Author: @senbagaraman04
 */

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import './PricingComponents.css';


export default class PricingComponents extends Component {
    render() {
        return (
            <Container className="card-page">
                <CardGroup>
                    <Card1 />
                    <Card2 />
                    <Card3 />

                </CardGroup>
            </Container>
        );
    }
}


class Card1 extends Component {
    render() {
        return (
            <Card className="card-light pricing-plan">
                <Card.Body>
                    <Card.Title>Basic</Card.Title>
                    <Card.Text>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="$199.99" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemText primary="500 GB storage" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="2 Users allowed" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="Send up to 3 GB" />
                            </ListItem>
                            <Divider />

                            <Button variant="outline-info" Color="Success">Learn More</Button>
                        </List>
                    </Card.Text>
                </Card.Body>

            </Card>


        );
    }
}

class Card2 extends Component {
    render() {
        return (
            <Card className="card-professional" >
                <Card.Body>
                    <Card.Title>Professional</Card.Title>
                    <Card.Text>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="$249.99" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemText primary="1TB Storage" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="5 Users allowed" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="Send up to 10 GB" />
                            </ListItem>
                            <Divider />

                            <Button variant="outline-info" Color="Success">Learn More</Button>
                        </List>
                    </Card.Text>
                </Card.Body>

            </Card>


        );
    }
}


class Card3 extends Component {
    render() {
        return (
            <Card className="card-light pricing-plan">
                <Card.Body>
                    <Card.Title>Master</Card.Title>
                    <Card.Text>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="$399.99" />
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemText primary="500 GB storage" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="10 Users allowed" />
                            </ListItem>
                            <Divider />

                            <ListItem disablePadding>
                                <ListItemText primary="Send up to 20 GB" />
                            </ListItem>
                            <Divider />

                            <Button variant="outline-info" Color="Success">Learn More</Button>
                        </List>
                    </Card.Text>
                </Card.Body>

            </Card>


        );
    }
}
