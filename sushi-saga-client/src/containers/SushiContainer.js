import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  // console.log(props.sushi)

  return (
    <Fragment>
      <div className="belt">
        {
         props.sushi.map(sushi => {
           return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eatenSushis={props.eatenSushis}/>
         })
        }
        <MoreButton addSushi={props.addSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer