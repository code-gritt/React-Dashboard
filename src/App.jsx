import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="others">
            <Routes>
              <Route>
                <Route path="/" element={<Homepage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
