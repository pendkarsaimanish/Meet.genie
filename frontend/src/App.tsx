import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </div>
  )
}

export default App;