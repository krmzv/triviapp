import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper';
import { getQuestions, setAnswer } from '../components/Quiz/actions'
import { Loader } from '../components/UI/Loader'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'

class Quiz extends Component{

	componentDidMount(){
		this.props.getQuestions(this.props.mode)
	}

	componentDidUpdate(prevProps){
		if(prevProps !== this.props){
			console.log(this.props.questions)
		}
	}

	render(){

		const urlNum = (l) => l.split('/')[2]
		const { isFetching, history: { location }, questions, setAnswer } = this.props

		const questionID = urlNum(location.pathname) - 1

		const current = questions[questionID]
		const q = current ? current.question : ''
		
		return(
			<Wrapper cn='container__quiz'>
				{ isFetching ? <Loader/> : 
					<div className='quiz slide-bottom'>
						<Card className='card card__question' qID={questionID} q={q}/>
						<div className='answer-btns'>
							<Link to={`/quiz/${questionID + 2}`}>
								<Button
									className='btn btn__answer btn__answer--false'
									text='👎 False'
									onClick={() => setAnswer(questionID, 'False')}/>
							</Link>

							<Link to={`/quiz/${questionID + 2}`}>
								<Button
									className='btn btn__answer btn__answer--true'
									text='👍 True'
									onClick={() => setAnswer(questionID, 'True')}/>
							</Link>
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