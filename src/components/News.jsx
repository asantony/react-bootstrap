import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './News.css';


export default class News extends Component{
    render(){
        return(
            <div>
                <Image src="assets/mountainman.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs ={12} sm={8} className="main-section" >
                            <p>We need dark in order to show light. Isn't that fantastic? This is the fun part Only God can make a tree - but you can paint one. We can fix anything.</p>
                            <p>You don't have to be crazy to do this but it does help. Son of a gun. Play with the angles.</p>
                            <p>Now we don't want him to get lonely, so we'll give him a little friend. We wash our brush with odorless thinner. Every day I learn.</p>
                            <p>Use what happens naturally, don't fight it. Maybe there's a happy little bush that lives right there. A beautiful little sunset. Maybe there's a happy little waterfall happening over here. I like to beat the brush.
</p>
<p>We need dark in order to show light. Isn't that fantastic? This is the fun part Only God can make a tree - but you can paint one. We can fix anything.</p>
                            <p>You don't have to be crazy to do this but it does help. Son of a gun. Play with the angles.</p>
                            <p>Now we don't want him to get lonely, so we'll give him a little friend. We wash our brush with odorless thinner. Every day I learn.</p>
                            <p>Use what happens naturally, don't fight it. Maybe there's a happy little bush that lives right there. A beautiful little sunset. Maybe there's a happy little waterfall happening over here. I like to beat the brush.
</p>
<p>We need dark in order to show light. Isn't that fantastic? This is the fun part Only God can make a tree - but you can paint one. We can fix anything.</p>
                            <p>You don't have to be crazy to do this but it does help. Son of a gun. Play with the angles.</p>


                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg" />
                            <p>We wash our brush with odorless thinner. Let's make some happy little clouds in our world. I guess that would be considered a UFO. A big cotton ball in the sky. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}