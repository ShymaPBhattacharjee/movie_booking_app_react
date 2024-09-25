import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <h1 style={{backgroundColor:'Bisque', color:'maroon'}}>
                <center>
                    Welcome to E-Cube
                </center>
            </h1>
            <hr />
            <ul >
                <Button variant="light" size="lg" active><li>
                    <Link to="/products">Latest Movies</Link>
                     </li>
                </Button>{' '}
                <Button variant="success" size="lg" active>
                    <li>
                        <Link to="/">Upcoming Movies</Link>
                    </li>
                </Button>

                {' '}
                <Button variant="warning" size="lg" active><li>
                    <Link to="/about">NearBy Events</Link></li>
                    
                    </Button>
                
               
            </ul>
        </>
    );
}


export default Header;