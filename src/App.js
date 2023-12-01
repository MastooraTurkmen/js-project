import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Dashboard, Error, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
