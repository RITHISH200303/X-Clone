import "./App.css";
import Home from "./components/pageComponents/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-full max-h-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<Home path="home" />}
          />
          <Route
            path="/explore"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/notification"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/messages"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/bookmarks"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
            <Route
            path="/jobs"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/communites"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/profile"
            element={<Home getRoute={"/api/user"} path="profile" />}
          />
          <Route
            path="/premium"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
          <Route
            path="/premium"
            element={<Home getRoute={"/api/profile"} path="profile" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
