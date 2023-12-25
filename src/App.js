import DownloadApp from "./components/DownloadApp";
import WhatFortifyDo from "./components/WhatFortifyDo";
import Footer from "./components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./components/Navigation";
import FrontSection from "./components/FronSection";
import FrequentlyAskedQuestionsSection from "./components/FAQ";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navigation />
      <FrontSection />
      <Slider />
      <WhatFortifyDo />
      <DownloadApp />
      <FrequentlyAskedQuestionsSection />
      <Footer />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default App;
