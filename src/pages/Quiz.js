import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Wrapper from '../components/Wrapper';
import { getQuestions, setAnswer } from '../components/Quiz/actions'
import { Loader } from '../components/UI/Loader'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'

class Quiz extends Component{

	componentDidMount(){
		this.props.getQuestions(this.props.mode)
	}

	render(){

		const urlNum = (l) => l.split('/')[2]
		const { isFetching, history: { location }, questions } = this.props

		const current = questions[urlNum(location.pathname)]
		const q = current ? current.question : ''

		console.log(q)
		
		return(
			<Wrapper cn='container__quiz'>
				{ isFetching ? <Loader/> : 
					<div className='quiz slide-bottom'>
						<Card className='card card__question' q={q}/>
						<div className='answer-btns'>
							<Button className='btn btn__answer btn__answer--false' text='👎 False'/>
							<Button className='btn btn__answer btn__answer--true' text='👍 True'/>
						</div>
					</div>
				}
			</Wrapper>
		)
	}
}

const stateToProps = ({state}) => ({
	questions: state.questions,
	mode: state.mode,
	isFetching: state.isFetching
})

export default connect(stateToProps, { getQuestions, setAnswer })(Quiz)