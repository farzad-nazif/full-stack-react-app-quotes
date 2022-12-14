import React from "react";
import { useEffect, useState } from "react";
import QuotesBox from "./QuotesBox";

function RandomQuote() {
  const [isClicked, setIsClicked] = useState(true);
  const [data, setData] = useState({});
  const RandomClickHandel = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    fetch(`https://quotes-api-farzad.glitch.me/quotes/random`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [isClicked]);
  return (
    <div id="RandomQuote">
      <button onClick={RandomClickHandel} id="searchInput" className="randombtn">
        Random Quote
      </button>
      <QuotesBox quote={data.quote} author={data.author} />
    </div>
  );
}

export default RandomQuote;
