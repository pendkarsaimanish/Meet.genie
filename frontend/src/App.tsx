import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import { Button } from "./components/ui/button";
import { useAuth } from "./context/AuthContext";

function App() {

  const { user } = useAuth();

  return (
    <>
      <div className="flex justify-between border-b-2 border-b-gray-500 px-4 py-2">

        <Button size={"sm"}>Sign out</Button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </>
  )
}

export default App;