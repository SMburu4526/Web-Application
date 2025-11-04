import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = () => {
    setResponse(`Echo: ${message}`);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Web Application</h1>
      
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message"
      />
      <button onClick={sendMessage}>Send</button>

      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
