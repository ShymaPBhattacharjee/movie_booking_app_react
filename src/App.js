
import './App.css';
import Header from './components/Header';

import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Home from './components/Home';
import{Route , BrowserRouter as Router,Switch} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import Form from './components/Form';
import Booking from './components/Booking';

import Booking2 from './components/Booking2';


function App() {
  return (
    <>
      
      <Router>
      <Header></Header>
        <div>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/about" component ={AboutUs} />
            
            <Route exact path="/products" component ={Products} />
            <Route exact path="/product/:productId" component={ProductDetails}/>
            <Route exact path="/product/:productId/booking" component={Booking}/>
            <Route exact path="/product/:productId/booking/showing" component={Booking2}/>
         
         
            

            
            <Route path ='/products/form' component={Form}/>
            <Route component ={PageNotFound} />
          </Switch>
        </div> 
      </Router>


    </>
  );
}

export default App;
