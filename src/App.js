import React, { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div>
        <LoadingScreen onComplete={() => console.log("Loading complete!")} />
      </div>
    </>
  );
};

export default App;
