import { useState } from "react";

import "./App.css";
import CreateMessage from "./components/Createtweet";
import Tweetlist from "./components/TweetList";

function App() {
  const [textInput, setTextInput] = useState("");
  const [message, setMessage] = useState([]);

  let name = "Pawlos";
  return (
    <div>
      <CreateMessage textInput={textInput} setTextInput={setTextInput} setMessage={setMessage} message={message}/>
      <Tweetlist name={name} message={message} />
    </div>
  );
}

export default App;
