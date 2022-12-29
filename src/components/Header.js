import LightSwitch from "./LightSwitch";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1>devfinder</h1>
      <LightSwitch isDark={false} />
    </header>
  );
}
