import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import "../css/Main.css";

const SearchBar = ({ history }) => {

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      let queryString = query;
      history.push(`/search/?${queryString}`);
    }
  }, [query]);

  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  const onTextUpdate = e => {
    setText(e.target.value);
  };

  return (
      <div className="search_container">
        <input
          type="search"
          placeholder="당신이 지금 읽고 있는 책은 무엇인가요?"
          name="query"
          className="input_search"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
        />
      </div>
    );
};

export default withRouter(SearchBar);
