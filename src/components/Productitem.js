import React from 'react';
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

function Productitem(props){

    return(
        <Card style={{ width: '30rem', height:'28rem', float:'left' ,backgroundColor :'lightblue'}}>
        <Card.Img variant="top" src={props.entity.image_url} />
        <Card.Body>
            <Card.Title style={{color:'firebrick'}}>{props.entity.name}</Card.Title>
            
            
        </Card.Body>
        <Button variant="primary"><Link to={`/product/${props.entity.id}`}><h3 style={{color:'white'}}>Book Now</h3></Link></Button>
    </Card>
    )
}

export default Productitem;