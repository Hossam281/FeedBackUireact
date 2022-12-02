import React from 'react'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

const FeedbackItem = ({item,handleDelete}) => {
  const deletee =() =>handleDelete(item.id);

  

  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={deletee} className="close">
            <FaTimes color='grey'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem