import { useState } from "react";
import search from "../assets/icon-search.svg";

export default function Input({ changeMainState }) {
  const [input, setInput] = useState("");
  function formSubmit(e) {
    e.preventDefault();
    changeMainState(input);
  }
  return (
    <form className="input-container" onSubmit={formSubmit}>
      <img src={search} />
      <input
        type="text"
        className="input-container__input"
        placeholder="Search Github Username...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="input-container__search_button">Search</button>
    </form>
  );
}
