import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
class Home extends React.Component{
    render(){
        return(
            <>
                  <h1 style={{color:'maroon'}}>Upcoming Movies are Here !!!</h1>

                  <center>
                  <div style={{width : "980px" ,
                  height : "200px"}}
                  >
                   

                     <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://walldiskpaper.com/wp-content/uploads/2015/11/Avatar-2-Best-Movie-Image-HD.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Avatar 2</h3>
           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/05/Eternals-Movie-Costumes.jpeg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Eternals</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.newsbugz.com/wp-content/uploads/2020/03/RRR-Film.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>RRR</h3>
                      
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    </div>
                    </center>
                   
           </>
        )
    }
}

export default Home;


