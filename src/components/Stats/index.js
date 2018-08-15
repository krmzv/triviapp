import React, { Component } from 'react'
import Wrapper from '../Wrapper'
import { Card } from '../UI/Card'
import { connect } from 'react-redux'

class Stats extends Component{
	render(){

		const { qs } = this.props

		return(
			<Wrapper cn='container__stats'>
				{ qs.map((q, idx) => <Card q={q.question} a={q.users_answer} key={idx} />) }
			</Wrapper>
		)
	}
}

const stateToProps = ({state}) => ({
	qs: state.questions
})

exeport default connect(stateToProps, {})(Stats)
