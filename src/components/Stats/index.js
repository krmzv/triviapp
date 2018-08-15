import React, { Component } from 'react'
import Wrapper from '../Wrapper'
import { Card } from '../UI/Card'
import { connect } from 'react-redux'
import { calcScore } from '../../utils/helpers'

class Stats extends Component{

	render(){

		const { qs } = this.props

		const x = calcScore(qs)

		console.log(x)

		return(
			<section className='result'>
				{ qs.map((q, idx) => <Card q={q.question} a={q.users_answer} key={idx} />) }
			</section>
		)
	}
}

const stateToProps = ({state}) => ({
	qs: state.questions
})

export default connect(stateToProps, {})(Stats)
