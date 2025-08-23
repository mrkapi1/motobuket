import Homepage from './component/Homepage';
import { useState } from "react";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  const onSignIn = () => {
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <Homepage onClick={onSignIn}/>
  );
}

export default App;
