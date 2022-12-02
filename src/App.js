import {v4 as uuidv4} from 'uuid'
import React from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback=(newFeedback)=>{
      newFeedback.id=uuidv4();
      setFeedback([newFeedback,...feedback]);
  }

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  };

  return (
    <>
      <Header />
      <div>
        <FeedbackForm handleAdd={addFeedback}/>
        <Feedbackstats feedback={feedback}/> 
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
