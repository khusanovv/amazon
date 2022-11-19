import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop } from "./utils";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
