import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Wrapper from '../components/wrapper'
import Splash from './Splash'
import Quiz from './Quiz'
import Score from './Score'

class Pages extends Component { 
	render(){
		return(
				<Switch>
					<Route exact path='/' component={Splash}/>
					<Route path='/quiz/:q' component={Quiz}/>
					<Route path='/score' component={Score}/>
				</Switch>
		)
	}
 }

 export default Pages