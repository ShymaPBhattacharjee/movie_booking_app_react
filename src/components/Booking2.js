import React, {Component} from 'react';

import Qrgen from './Qrgen';




const url= 'http://localhost:4500/feed';


class Booking2 extends Component {
    constructor(props){
        super(props);

        this.state={
            details:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.productId)
        fetch(`${url}/${this.props.match.params.productId}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then((data)=> {
            this.setState({
                details:data
            })
        })
    }

    render() {
       
        return(
            <div>
                
                <Qrgen detaildata={this.state.details}/>
                
            </div>
        )
    }
}

export default Booking2;