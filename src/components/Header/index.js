import React, { Component } from 'react'
import { connect } from 'react-redux'
import './header.css'

class Header extends Component{
	render(){
		return(
			<div className='header'>
				🙌 Welcome to the Trivia Challenge!
			</div>
		)
	}
}

const stateToProps = ({root}) => {}

export default connect(stateToProps, {})(Header)