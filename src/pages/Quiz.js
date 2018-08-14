import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Wrapper from '../components/Wrapper';
import { getQuestions } from '../components/Quiz/actions'

class Quiz extends Component{

	componentDidMount(){
		this.props.getQuestions(this.props.mode)
	}

	render(){

		const { isFetching } = this.props

		return(
			<Wrapper>
				{ isFetching ? <h1>loading</h1> : <h1>HERES THE QUIZ</h1> }
			</Wrapper>
		)
	}
}

const stateToProps = ({state}) => ({
	mode: state.mode,
	isFetching: state.isFetching
})

export default connect(stateToProps, { getQuestions })(Quiz)