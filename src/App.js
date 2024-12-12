import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { listen } from "./redux/listener";
import { AppRouters } from "./routes";

function App() {
  useEffect(() => {
    listen();
  }, []);
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
