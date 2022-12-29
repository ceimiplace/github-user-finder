import search from "../assets/icon-search.svg";

export default function Input() {
  return (
    <form className="input-container">
      <img src={search} />
      <input
        type="text"
        className="input-container__input"
        placeholder="Search Github Username...."
      />
      <button className="input-container__search_button">Search</button>
    </form>
  );
}
