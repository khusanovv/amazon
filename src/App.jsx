import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop } from "./utils";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes/>
      <BackToTop/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </>
  );
}

export default App;
