import "./App.css";
import ValidatedLoginForm from "./ValidateLoginForm";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setUsers([...users, data]);
  };

  return (
    <div className="App">
      <ValidatedLoginForm siusiak={addUser}></ValidatedLoginForm>
    </div>
  );
}

export default App;
