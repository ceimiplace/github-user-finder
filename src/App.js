import Input from "./components/Input";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    function SearchUser(input) {
      setError("");
      setUserData("");
      fetch("https://api.github.com/users/" + input)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          if (data.message) {
            throw new Error(data.message);
          }
          setUserData(data);
        })
        .catch((err) => setError(err.message));
    }
    if (userInput) {
      SearchUser(userInput);
    }
  }, [userInput]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="app__wrapper">
        <Header setDarkMode={setDarkMode} darkMode={darkMode}></Header>

        <Input changeMainState={setUserInput} />
        {(userData || error) && (
          <div className="main-container">
            {userData && <Main data={userData} />}
            {error && <div className="error-container">{error}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
