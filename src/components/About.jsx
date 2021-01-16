import React, {Component} from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css'

export default class About extends Component{
    render(){
        return(
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person2.jpg" className="about-profile-pic" rounded />
                        <h3>Frank The Tank</h3>
                        <p>A fan brush is a fantastic piece of equipment. Use it. Make friends with it. It's a good way of getting rid of all your anxieties and hostilities. I'm gonna add just a tiny little amount of Prussian Blue. The more we do this - the more it will do good things to our heart.</p> 
                        <p>We don't make mistakes we just have happy little accidents. How to paint. That's easy. What to paint. That's much harder. Isn't that fantastic that you can create an almighty tree that fast? You need the dark in order to show the light. That is when you can experience true joy, when you have no fear. It takes dark in order to show light.</p>
                        <p>And just raise cain.I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. Those great big fluffy clouds. Little short strokes. This is a fantastic little painting. I thought today we would do a happy little picture.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}