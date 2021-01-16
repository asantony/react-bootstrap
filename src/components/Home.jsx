import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Mywebsite</h2>
                    <p>This is how to build website with React and React-bootstrap</p>
                    <Link to = "/about">
                        <Button bsstyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <p>Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Be brave. Use what happens naturally, don't fight it. Talk to trees, look at the birds. Whatever it takes. And maybe a little bush lives there. That easy.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person2.jpg" circle className="profile-pic" />
                        <p>Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Be brave. Use what happens naturally, don't fight it. Talk to trees, look at the birds. Whatever it takes. And maybe a little bush lives there. That easy.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person3.jpg" circle className="profile-pic" />
                        <p>Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green. Be brave. Use what happens naturally, don't fight it. Talk to trees, look at the birds. Whatever it takes. And maybe a little bush lives there. That easy.</p>
                    </Col>
                </Row>
                
            </Grid>
        )
    }
}