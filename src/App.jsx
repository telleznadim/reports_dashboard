import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Grid from "./Pages/Grid/Grid";
// import ReportsTable from "./Pages/ReportsTable/ReportsTable";
import NavBar from "./Components/NavBar";
import ReportsTable from "./Pages/ReportsTable/ReportsTable";
import ReportPage from "./Pages/ReportPage/ReportPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/reports" element={<ReportsTable />} />
          <Route path="/report/:url" element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
