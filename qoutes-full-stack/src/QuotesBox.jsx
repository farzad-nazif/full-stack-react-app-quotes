import React from 'react'

function QuotesBox({ quote , author }) {
  return (
    <div className="quotebox">
      <h3>{quote}</h3>
      <p>{author}</p>
    </div>
  );
}

export default QuotesBox