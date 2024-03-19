import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  const screen = window.screen.availWidth;
  return (
    <div className="App">
      <BrowserRouter>
        {screen > 900 && <Header />}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {screen > 900 && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
