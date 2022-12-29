import search from "../assets/icon-search.svg";

export default function Input() {
  return (
    <div>
      <img src={search} />
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </div>
  );
}
