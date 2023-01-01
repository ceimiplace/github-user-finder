import { useState } from "react";
import search from "../assets/icon-search.svg";

export default function Input({ changeMainState }) {
  const [input, setInput] = useState("");
  function formSubmit(e) {
    e.preventDefault();

    let word = input.split(" ").join("");
    setInput(word);
    changeMainState(word);
  }
  return (
    <form className="input-container" onSubmit={formSubmit}>
      <img src={search} alt="magnifying glass" />
      <input
        type="text"
        className="input-container__input"
        placeholder="Search Github Username...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type=" submit" className="input-container__search_button">
        Search
      </button>
    </form>
  );
}
