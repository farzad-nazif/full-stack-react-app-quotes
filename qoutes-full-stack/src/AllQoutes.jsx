import React from "react";
import { useEffect, useState } from "react";
import QuotesBox from "./QuotesBox";

function AllQoutes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quotes-api-farzad.glitch.me/quotes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div id="AllQoutes">
      {data.length === 0 ? (
        <div class="loader"></div>
      ) : (
        data.map((quote) => {
          return <QuotesBox quote={quote.quote} author={quote.author} />;
        })
      )}
    </div>
  );
}

export default AllQoutes;
