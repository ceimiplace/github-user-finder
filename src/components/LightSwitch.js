import darkicon from "../assets/icon-moon.svg";
import lighticon from "../assets/icon-sun.svg";
export default function LightSwitch({ setDarkMode, darkMode }) {
  return (
    <div className="light-switch">
      <p className="light-switch__text">{darkMode ? "Light" : "Dark"}</p>
      <button
        area-label="Dark mode switch"
        className="dark-mode-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        <img
          className="light-switch-button"
          alt="light mode switch"
          src={darkMode ? lighticon : darkicon}
        />
      </button>
    </div>
  );
}
