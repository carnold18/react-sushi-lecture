import React, { Fragment } from 'react';
import AddMoney from '../components/AddMoney';


const Table = (props) => {
  console.log(props)

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} key={index}/>
    })
  }

  return (
    <Fragment>
      < AddMoney handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        <h1 className="remaining">
          You have: ${ props.balance } remaining!
        </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table