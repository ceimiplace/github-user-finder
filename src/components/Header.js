import LightSwitch from "./LightSwitch";

export default function Header({ children }) {
  return (
    <header className="header">
      <p className="header__heading">devfinder</p>
      <LightSwitch isDark={false} />
    </header>
  );
}
