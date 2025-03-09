import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import TPO from "./components/TPO";
import WhyRecruit from "./components/whyrecruit";
import Messages from "./components/messages";
import Achievements from "./components/achievements";
/* import PlacementProcess from "./components/PlacementProcess"; */
import PastRecruiters from "./components/pastrecruiters";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tpo" element={<TPO />} />
        <Route path="/why-recruit" element={<WhyRecruit />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/achievements" element={<Achievements />} />
{/*         <Route path="/placement-process" element={<PlacementProcess />} /> */}
        <Route path="/past-recruiters" element={<PastRecruiters />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
