import LightSwitch from "./LightSwitch";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1 className="header__heading">devfinder</h1>
      <LightSwitch isDark={false} />
    </header>
  );
}
