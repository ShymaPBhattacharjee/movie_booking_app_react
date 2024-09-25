import React, { Component } from 'react'

import FormItem from './FormItem';

export default class  extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
       fetch('http://localhost:4500/feed/',{method:'GET'})
       .then((response)=>response.json())
       .then((data)=>{
           this.setState({products:data})
       }) 
    }
    render() {
        const list1 = this.state.products?.map((item)=><FormItem entity={item}></FormItem>)
        return (
            <div>
                <h1>Enquiry Data</h1>
                {list1}
            </div>
        )
    }
}