import { getSuggestedQuery } from "@testing-library/react";
import Input from "./components/Input";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
        <Header></Header>
        <Input />
      </div>
    </div>
  );
}

export default App;
