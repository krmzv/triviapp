import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { idFromUrl, pageFromUrl } from '../../utils/helpers'
import './header.css'

class Header extends Component{
	render(){

		const { history: { location: { pathname } } } = this.props

		const homeTitle = '🙌 Welcome to the Trivia Challenge!' 
		const quizTitle = `🤔 Q#${idFromUrl(pathname) + 1}`
		const statsTitle = '🎯 You\'ve scored 8/10!'

		const renderTitle = (url) => {
			if(url === '/') return <span>{homeTitle}</span>
			else if(pageFromUrl(url) === 'quiz') return <span>{quizTitle}</span>
			else if(pageFromUrl(url) === 'stats') return <span>{statsTitle}</span>
		}


		return(
			<div className='header'>
				{ renderTitle(pathname) }
			</div>
		)
	}
}

const stateToProps = ({state}) => ({
	category: state.questions
})

export default connect(stateToProps, {})(withRouter(Header))