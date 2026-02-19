import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [osInfo, setOsInfo] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/os")
      .then((res) => res.json())
      .then((data) => setOsInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (type) => {
    if (!osInfo) return;

    if (type === "free") {
      setResult(`Free Memory: ${Math.round(osInfo.freemem / (1024 * 1024))} MB`);
    }

    if (type === "total") {
      setResult(`Total Memory: ${Math.round(osInfo.totalmem / (1024 * 1024))} MB`);
    }

    if (type === "cpu") {
      setResult(`CPU Architecture: ${osInfo.arch}`);
    }

    if (type === "user") {
      setResult(`User: ${osInfo.user.username}`);
    }
  };

  return (
    <div className="outer">
      <div className="box">
        <h2>Work with OS</h2>

        {/* RESULT AREA */}
        <div className="result-area">
          {result ? <p>{result}</p> : <p className="dots">. . . . .</p>}
        </div>

        {/* BUTTONS */}
        <div className="button-grid">
          <button onClick={() => handleClick("free")}>Free Memory</button>
          <button onClick={() => handleClick("total")}>Total Memory</button>
          <button onClick={() => handleClick("cpu")}>CPU Arch</button>
          <button onClick={() => handleClick("user")}>User Info</button>
        </div>
      </div>
    </div>
  );
}

export default App;
