import darkicon from "../assets/icon-moon.svg";
import lighticon from "../assets/icon-sun.svg";
export default function LightSwitch({ isDark }) {
  return (
    <div className="light-switch">
      <p className="light-switch__para">{isDark ? "Light" : "Dark"}</p>
      <img src={isDark ? lighticon : darkicon} />
    </div>
  );
}
