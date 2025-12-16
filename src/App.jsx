import { useState } from "react";

import "./App.css";

import AppRoute from "./Routing/AppRoute";

function App() {
  const [data, setData] = useState("");
  // console.log(data);

  return (
    <>
      <AppRoute />
    </>
  );
}

export default App;
