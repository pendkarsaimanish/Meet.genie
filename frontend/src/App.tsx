import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import { Button } from "./components/ui/button";
import { useAuth } from "./context/AuthContext";
import Avatar from '@mui/joy/Avatar';
import { PuffLoader } from "react-spinners";
import { useSummarizer } from "./hooks/useSummarizer";

function App() {

  const { user, loading, signOutUser } = useAuth();
  const { summary } = useSummarizer()
  const avatarInitials = user?.username.slice(0, 2).toUpperCase();

  return (
    <>

      <div className="flex justify-between border-b-[0.5px] border-b-gray-300 px-4 py-2 min-h-[56px]">
        {user && !loading && (
          <Avatar size="sm" variant="solid" sx={{ backgroundColor: "#000000" }}><p className="flex justify-center items-center text-[12px] font-sans font-bold">{avatarInitials}</p></Avatar>
        )}

        {summary && "+"}

        <h1 className="flex mx-auto items-center justify-center gap-1 text-[Inter] font-medium">
          <img src="/meet_genie_dark.svg" alt="logo" height={24} width={24} className="" />
          Meet.genie
        </h1>

        {user && !loading && (
          <Button size={"sm"} onClick={signOutUser}>
            {loading &&
              <div className="py-2 flex justify-center items-center">
                <PuffLoader size={24} color="#fff" />
              </div>
            }
            Sign out
          </Button>
        )}
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </>
  )
}

export default App;