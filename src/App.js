import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing, Dashboard, Error, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
