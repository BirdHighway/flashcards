import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuizComponent from './QuizComponent';

const flashcards = [
  {
  "card_id": 1,
  "prompt": "PostgreSQL default port",
  "answer": "5432"
  },
  {
  "card_id": 2,
  "prompt": "PostgreSQL max varchar size",
  "answer": "65,535 bytes"
  }
];

it('by default it will render the first prompt', () => {
  const firstPrompt = flashcards[0].prompt;
  const renderedObject = render(
    <QuizComponent flashcards={flashcards} />
  );
  expect(renderedObject.queryByText(firstPrompt)).toBeTruthy();
});

it('after clicking next, it will render the second prompt', () => {
  const secondPrompt = flashcards[1].prompt;
  const renderedObject = render(
    <QuizComponent flashcards={flashcards} />
  );
  fireEvent.click(renderedObject.getByText('Next'));
  expect(renderedObject.queryByText(secondPrompt)).toBeTruthy();
});

it('display answer only after clicking show answer button', () => {
  const firstAnswerText = flashcards[0].answer;
  const renderedObject = render(
    <QuizComponent flashcards={flashcards} />
  );
  expect(renderedObject.queryByText(firstAnswerText)).toBeNull();
    fireEvent.click(renderedObject.getByText('Show Answer'));
    expect(renderedObject.queryByText(firstAnswerText)).toBeTruthy();
});
