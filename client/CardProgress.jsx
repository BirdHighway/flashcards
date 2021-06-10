import React from 'react';

const CardProgress = (props) => {
  const currentIndex = props.currentIndex;
  const cardCount = props.cardCount;

  const countArray = new Array(cardCount).fill(0);

  return (
    <div className="progress-bar" role="progress-bar">
      {
        countArray.map((_, i) => {
          const color = i === currentIndex ? 'yellow' : 'white';
          return (
            <div role="progress-indicator"
              className="progress-indicator"
              key={i}
              style={{backgroundColor: color}}></div>
          );
        })
      }
    </div>
  );
};

export default CardProgress;
