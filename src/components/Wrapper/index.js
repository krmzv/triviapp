import React, { Component } from 'react'
import Header from '../Header'
import './wrapper.css'

class Wrapper extends Component{

  render(){

		const { cn } = this.props

		const classNames=`container ${cn}`

		return(
			<div className={classNames}>
				<Header/>
				{ this.props.children } 
			</div>
		)
	}
}

export default Wrapper