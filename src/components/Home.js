import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div>
    <h1>Welcome to {name}'s Home</h1>
      <p>City: {city}</p>
  </div>;
}

export default Home;
