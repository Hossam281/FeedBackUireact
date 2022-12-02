import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({handleAdd}) => {
    const [text,setText]=useState('');
    const [rating,setRating]=useState(10);
    const [btnDis,setBtnDis]=useState(true);
    const [message,setMessage]=useState('');
    const handleChange=(e)=>{
        if(text ===''){
            setBtnDis(true);
            setMessage(null);
        }
        else if(text !== '' && text.trim().length<10){
            setMessage('Review must be at least 10 characters');
            setBtnDis(true);
        }
        else{
            setMessage(null);
            setBtnDis(false);
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length >=10 ){
            const newFeedback={
                text: text,
                rating: rating,
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>what is your rating?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleChange} type="text" placeholder='Write a review' value={text} />
                <Button type="submit" isDisabled={btnDis} >Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm