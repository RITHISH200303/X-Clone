import "./App.css";
import Home from "./components/pageComponents/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-full max-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home getRoute={"/api/home"} />} />
          {/* test commit */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
