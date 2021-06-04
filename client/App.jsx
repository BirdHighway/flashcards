import React, { useState, useEffect } from 'react';
import QuizComponent from './QuizComponent';
import axios from 'axios';

const App = () => {

  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get('/api/flashcards?random=true')
      .then((response) => {
        const flashcardData = response.data;
        setFlashcards(flashcardData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>App is Working</h1>
      <QuizComponent flashcards={flashcards} />
    </div>
  );
};

export default App;
