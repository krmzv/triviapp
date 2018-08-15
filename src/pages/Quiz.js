import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper';
import { getQuestions, setAnswer } from '../components/Quiz/actions'
import { idFromUrl } from '../utils/helpers'
import { Loader } from '../components/UI/Loader'
import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'

class Quiz extends Component{

	state = {
		end: false
	}

	componentDidMount(){
		this.props.getQuestions(this.props.mode)
	}

	componentDidUpdate(prevProps){

		const currentPath = this.props.history.location.pathname

		if(prevProps.location.pathname !== currentPath){
				if(idFromUrl(currentPath) + 1 === 10) {
					this.setState({end: true})
				}
		}

	}

	render(){

		const { isFetching, history: { location }, questions, setAnswer } = this.props

		const questionID = idFromUrl(location.pathname)

		const current = questions[questionID]
		const q = current ? current.question : ''
		const c = current ? current.category : ''

		const buttonLink = this.state.end ? '/score' : `/quiz/${questionID + 2}`
		
		return(
			<Wrapper cn='container__quiz'>
				{ isFetching ? <Loader/> : 
					<div className='quiz slide-bottom'>

						<Card
							className='card card__question'
							qID={questionID}
							q={q}
							c={c}/>

						<div className='answer-btns'>
							<Link to={buttonLink}>
								<Button
									className='btn btn__answer btn__answer--false'
									text='👎 False'
									onClick={() => setAnswer(questionID, 'False')}/>
							</Link>

							<Link to={buttonLink}>
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