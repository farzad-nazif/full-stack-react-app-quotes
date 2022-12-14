import React from "react";
import { useEffect, useState } from "react";
import QuotesBox from "./QuotesBox";

function SearchAuthors() {
  const [data, setData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("farzad");
  useEffect(() => {
    fetch(
      `https://quotes-api-farzad.glitch.me/author/search?term=${searchedValue}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchedValue]);
  const searchHandel = (e) => {
    let word = e.target.value;
    setSearchedValue(word);
  };
  return (
    <div id="SearchQoutes">
      <input
        type="text"
        onChange={searchHandel}
        id="searchInput"
        placeholder="Search in authors ..."
      />
      <div id="AllSearchedQoutes">
        {searchedValue.length === 0 ? (
          <></>
        ) : (
          data.map((quote) => {
            return <QuotesBox quote={quote.quote} author={quote.author} />;
          })
        )}
      </div>
    </div>
  );
}

export default SearchAuthors;
