import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop } from "./utils";

function App() {
  return (
    <>
      <Header/>
      <Routes/>
      <BackToTop/>
    </>
  );
}

export default App;
