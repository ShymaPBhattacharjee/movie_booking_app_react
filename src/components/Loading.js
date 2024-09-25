import React from 'react';
import { connect } from 'react-redux'
import img from '../loading.gif'



class Loading extends React.Component{

  render(){
     console.log('loading ',this.props.loading)
     return(
        
     	<div>
            {
                this.props.loading && (
                    <center>
                        <img src={img} alt='loading' />
					   <h1>LOADING.....</h1>
                    </center>

                )
					   
					
     		}
     	</div>

     	)
  }

}


const mapStateToProps = (state) =>{
    
	return ({loading: state.preducer.loading})

} 

export default connect(mapStateToProps,null)(Loading);