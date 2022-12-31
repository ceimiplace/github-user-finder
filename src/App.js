import { getSuggestedQuery } from "@testing-library/react";
import Input from "./components/Input";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
function App() {
  const [userInput, setUserInput] = useState("");
  const [userData, setUserData] = useState("");
  useEffect(() => {
    function SearchUser(input) {
      fetch("https://api.github.com/users/" + input)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setUserData(data);
        });
      // const octokit = new Octokit({
      //   auth: "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",
      // });

      // const denis = await octokit.request("GET /users/{ceimiplace}", {
      //   username: "ceimiplace",
      // });
      // console.log(denis);
    }
    if (userInput) {
      SearchUser(userInput);
    }
  }, [userInput]);

  return (
    <div className="App">
      <div className="app__wrapper">
        <Header></Header>
        <Input changeMainState={setUserInput} />
        <Main data={userData} />
      </div>
    </div>
  );
}

export default App;
