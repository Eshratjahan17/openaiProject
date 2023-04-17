import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tweet, setTweet] = useState("");
  const API_KEY = "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";
  console.log(tweet);
  const callOpenAIAPI = () => {
    console.log("open ai calling");
}
  return (
    <div className='text-area'>
      <textarea
        onChange={(e) => setTweet(e.target.value)}
        placeholder='Your tweet here'
        cols={50}
        rows={10}
      >
        
      </textarea>
      <button onClick={callOpenAIAPI}>Test tweet Sentiment</button>
    </div>
  )
}

export default App
