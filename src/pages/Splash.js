import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../components/Wrapper'
import { Button } from '../components/UI/Button'
import { Heading } from '../components/UI/Typo'
import { setMode } from '../components/Splash/actions'

const Splash = (props) => {

	const { setMode } = props 

  return(
    <Wrapper cn='container__splash'>
    	<Heading/>
      <div className='mode'>
      <span>Choose a mode:</span>
          <div className='btn-container'>
            <Link to='/quiz'>
              <Button
                onClick={() => setMode('easy')}
                cn='btn btn__mode btn__mode--easy'
                text='Easy'/>
            </Link>
            <Link to='/quiz'>
              <Button
                onClick={() => setMode('hard')}
                cn='btn btn__mode btn__mode--hard'
                text='Hard'/>
            </Link>
          </div>
        </div>
    </Wrapper>
  )
}

export default connect(null, { setMode })(Splash)