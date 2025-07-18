// import PhaserGame from "./PhaserGame";
import Navbar from "./Components/user/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import MeetingRoom from "./Pages/MeetingRoom";
import ProtectedRoute from "./lib/ProtectedRoute";
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/room/");
  return (
    <>
      <div className="flex flex-col w-full items-center gap-1 h-[35rem] bg-gradient-to-b from-[#bec4ff] to-[#21258d9f]">
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/Room/:roomId"
            element={
              <ProtectedRoute>
                <MeetingRoom />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
