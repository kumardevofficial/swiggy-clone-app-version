import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="hideMyScroll">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
