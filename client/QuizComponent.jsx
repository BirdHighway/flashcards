import React, { useState } from 'react';

const QuizComponent = (props) => {

  // array of prompt/answer objects
  // current prompt/answer object index
  // displayAnswer true/false
  const [flashcardIndex, setFleshcardIndex] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const currentCard = props.flashcards.length ? props.flashcards[flashcardIndex] : null;

  if (currentCard === null) {
    return null;
  }

  const showHandler = () => {
    setDisplayAnswer(true);
  };

  const updateIndex = (isForwards = true) => {
    const change = isForwards ? 1 : -1;
    let newIndex = flashcardIndex + change;
    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex === props.flashcards.length) {
      newIndex--;
    }
    setFleshcardIndex(newIndex);
    setDisplayAnswer(false);
  };

  const decrementIndex = () => {
    updateIndex(false);
  }

  return (
    <div className='quiz-container'>
      <div className='quiz-display'>
        <div className='display-prompt'>
          <h3 className='header'>Prompt</h3>
          <h3>{currentCard.prompt}</h3>
        </div>
        <div className='display-answer'>
          <h3 className='header'>Answer</h3>
          { displayAnswer &&
            <h3>{currentCard.answer}</h3>
          }
        </div>
      </div>
      <button onClick={decrementIndex}>Previous</button>
      <button onClick={showHandler}>Show Answer</button>
      <button onClick={updateIndex}>Next</button>
    </div>
  );
};


export default QuizComponent;
