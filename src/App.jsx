import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Industries from "./Industries";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries/advertising-media" element={<Industries />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
