import React, { Component } from 'react'
import { connect } from 'react-redux';

import Loading from './Loading';
import Productitem from './Productitem';
import { bindActionCreators } from 'redux';
import { fetchProductsBegin } from './Actions/ProductActions';

class Products extends Component {
    constructor(){
        super();
        this.state={
            
            products:[]
        }
    }
    componentDidMount(){
    //    fetch('http://localhost:6700/courses',{method:'GET'})
    //    .then((response)=>response.json())
    //    .then((data)=>{
    //        this.setState({products:data})
    //    }) 
        this.props.fetchProductsBegin();
                   
    }
    render() {
        const list = this.props.products?.map((item)=><Productitem key={item.id} entity={item}></Productitem>)
        return (
            <div>
                <center>
                <h2 style={{backgroundColor:'turquoise'  ,color:'green'}}>Recommended Movies</h2>
                </center>
                <Loading />
                {list}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        products:state.preducer.items
    }
}

const mapDispatchToProps=(dispatch)=>{
	return bindActionCreators({fetchProductsBegin},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Products)
