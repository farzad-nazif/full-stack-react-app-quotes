import React from "react";
import { useEffect, useState } from "react";

function AllQoutes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://quotes-api-farzad.glitch.me/quotes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div id="AllQoutes">
      {data.map((quote) => {
        return <p>{quote.quote}</p>;
      })}
    </div>
  );
}

export default AllQoutes;
