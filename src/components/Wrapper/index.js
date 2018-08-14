import React, { Component } from 'react'
import Header from '../Header'
import './wrapper.css'

class Wrapper extends Component{
  render(){
		return(
			<div className='wrapper'>
				<div className='container'>
					<Header/>
					{ this.props.children } 
				</div>
			</div>
		)
	}
}

export default Wrapper