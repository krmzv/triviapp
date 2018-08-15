import React, { Component } from 'react'
import Wrapper from '../Wrapper'
import { Card } from '../UI/Card'
import { connect } from 'react-redux'
import { isCorrect, calcScore } from '../../utils/helpers'

class Stats extends Component{

	render(){

		const { qs } = this.props

		const correctCn = 'card card__score card__score--correct'
		const wrongCn = 'card card__score card__score--wrong'

		return(
			<section className='result'>
				{ qs.map((q, idx) => <Card
										c={isCorrect(q.correct_answer, q.users_answer) ? "✅" : "❌"} 
										q={q.question}
										a={q.users_answer}
										key={idx}
										className={isCorrect(q.correct_answer, q.users_answer) ? correctCn : wrongCn}/>)
				}
			</section>
		)
	}
}

const stateToProps = ({state}) => ({
	qs: state.questions
})

export default connect(stateToProps, {})(Stats)
