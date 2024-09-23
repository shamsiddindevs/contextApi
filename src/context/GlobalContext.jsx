import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
      </UserContext.Provider>
    );
  }
import { useState, createContext, useContext } from "react";
  function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }