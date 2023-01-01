import LightSwitch from "./LightSwitch";

export default function Header({ children, setDarkMode, darkMode }) {
  return (
    <header className="header">
      <p className="header__heading">devfinder</p>
      <LightSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}
