import React from 'react'

const Feedbackstats = ({feedback}) => {
    let average=feedback.reduce((acc,item)=>{
        return acc+item.rating
    },0)/feedback.length;

    average=average.toFixed(1);

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default Feedbackstats