import React from 'react';
import { render, screen } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import CardProgress from './CardProgress';

// expect.extend({ toHaveStyle });

it('when first loaded it should highlight the first section', () => {
  const currentIndex = 0;
  const cardCount = 10;

  const renderedObject = render(
    <CardProgress currentIndex={currentIndex} cardCount={cardCount} />
  );

  const indicators = renderedObject.getAllByRole('progress-indicator');
  expect(indicators[0]).toHaveStyle('background-color: yellow');
});

it('there are as many sections as there are cards in the deck', () => {
  const currentIndex = 0;
  const cardCount = 10;
  const renderedObject = render(
    <CardProgress currentIndex={currentIndex} cardCount={cardCount} />
  );

  const indicators = renderedObject.getAllByRole('progress-indicator');
  expect(indicators).toHaveLength(cardCount);
});

it('the currently selected section is highlighted', () => {
  const currentCard = 5;
  const cardCount = 10;
  const renderedObject = render(
    <CardProgress currentIndex={currentCard} cardCount={cardCount} />
  );
  const indicators = renderedObject.getAllByRole('progress-indicator');
  expect(indicators[currentCard]).toHaveStyle('background-color: yellow');

});

