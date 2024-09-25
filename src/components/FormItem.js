import React from 'react'
import Card from 'react-bootstrap/Card'


export default function FormItem(props) {
    return (
       
        
        <Card style={{ width: '18rem' ,height:'32rem', float:'left' }}>
       
        <Card.Img variant="top" src={props.entity.image_url} />
        <Card.Body>
        <Card.Title  style={{color:'Green'}}>{props.entity.name}</Card.Title>
      
           price :{props.entity.cost}
           <hr />
           description : {props.entity.description}
           <hr />
           Rating : {props.entity.rating}
           <hr />
           Restaurent : {props.entity.restaurent_name}
           <hr />
        
        </Card.Body>
    </Card>
    )
}

