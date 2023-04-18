import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const API_KEY = "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";

function App() {
 
  const [tweet, setTweet] = useState("");
  const [Sentiment, setSentiment] = useState("");
  console.log(tweet);
  const callOpenAIAPI = async () => {
    console.log("open ai calling");
    const APIBody = {
      model: "text-davinci-003",
      prompt: "what is the sentiment of this tweet?" + tweet,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + API_KEY,
      },
     
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data,API_KEY);
      });
  };
  return (
    <div className="text-area">
      <textarea
        onChange={(e) => setTweet(e.target.value)}
        placeholder="Your tweet here"
        cols={50}
        rows={10}
      ></textarea>
      <button onClick={callOpenAIAPI}>Test tweet Sentiment</button>
    </div>
  );
}

export default App;
