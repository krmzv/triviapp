import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { connect } from 'react-redux'
import { idFromUrl, pageFromUrl, calcScore } from '../../utils/helpers'
import './header.css'

class Header extends Component{
	render(){

		const { history: { location: { pathname } }, qs} = this.props

		const homeTitle = '🙌 Welcome to the Trivia Challenge!' 
		const quizTitle = `🤔 Q#${idFromUrl(pathname) + 1}`
		const scoreTitle = `🎯 You\'ve scored ${calcScore(qs)}/10!`

		const renderTitle = (url) => {
			if(url === '/') return <span>{homeTitle}</span>
			else if(pageFromUrl(url) === 'quiz') return <span>{quizTitle}</span>
			else if(pageFromUrl(url) === 'score') return <span>{scoreTitle}</span>
		}


		return(
			<div className='header'>
				{ renderTitle(pathname) }
				{ pathname === '/score' ?
					<Link to='/'>
						<Button text='Play again?' className='btn btn__play'/>
					</Link> : null
				}
			</div>
		)
	}
}

const stateToProps = ({state}) => ({
	qs: state.questions,
})

export default connect(stateToProps, {})(withRouter(Header))