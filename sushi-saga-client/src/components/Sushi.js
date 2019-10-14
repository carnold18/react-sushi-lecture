import React from 'react';

const Sushi = (props) => {
  // console.log(props)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={ () => props.eatSushi(props.sushi) }>
        { !props.eatenSushis.includes(props.sushi) ?
         <img src={props.sushi.img_url} width="100%" alt="" />
          : null }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi