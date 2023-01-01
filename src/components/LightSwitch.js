import darkicon from "../assets/icon-moon.svg";
import lighticon from "../assets/icon-sun.svg";
export default function LightSwitch({ setDarkMode, darkMode }) {
  return (
    <div className="light-switch">
      <p className="light-switch__text">{darkMode ? "Light" : "Dark"}</p>
      <img
        alt="light mode switch"
        onClick={() => setDarkMode(!darkMode)}
        src={darkMode ? lighticon : darkicon}
      />
    </div>
  );
}
