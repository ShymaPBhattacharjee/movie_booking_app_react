import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Button  from 'react-bootstrap/Button';


import { Link } from 'react-router-dom';



const Listing = (props) => {

    return(

        <div>
            
            
          
                 <CardGroup>
                    <Card>
                    <Image src={props.detaildata.image_url} fluid />
                        <Card.Body>
                      

                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 Hrs ago</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{backgroundColor:'Aliceblue'}}>
                      
                        <Card.Body>
                        <Card.Title>
                            <ListGroup horizontal>
                            <ListGroup.Item style={{backgroundColor:'palegreen',color:'BlueViolet'}}>{props.detaildata.name}</ListGroup.Item>
                            <ListGroup.Item style={{backgroundColor:'palegreen',color:'BlueViolet'}}>Release Date{ ' '} :{' '}{props.detaildata.date}</ListGroup.Item>
                            </ListGroup>
                            <ListGroup>
                                <ListGroup.Item style={{backgroundColor:'lightcyan',color:'BlueViolet'}}>Run time{ ' '} :{' '}{props.detaildata.runtime}</ListGroup.Item>
                                <ListGroup.Item style={{backgroundColor:'lightcyan',color:'BlueViolet'}}>Rating{ ' '} :{' '}{props.detaildata.rating} /5</ListGroup.Item>
                                <ListGroup.Item style={{backgroundColor:'lightcyan',color:'BlueViolet'}}>Price of each ticket{ ' '} :{' '}Rs.{props.detaildata.Price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Title>
                        <Button variant="primary"><Link to={`/product/${props.detaildata.id}/booking`}><p style={{color:'white'}}>Book Tickets now</p></Link></Button>
                      
                    
                        </Card.Body>
                       
                    </Card>
                   
                    </CardGroup>
        </div>
    )

}

export default Listing;
