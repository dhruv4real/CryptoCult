import './App.css';
import Navbar from './Components/Navbar';
import MasterPage from './Components/MasterPage';
import BelowMaster from "./Components/BelowMaster"
import Membership from "./Components/Membership";
import YoutubeSection from './Components/YoutubeSection';
import TwitterSection from "./Components/TwitterSection";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <>
    <Navbar />
    <MasterPage />
    <BelowMaster />
    <Membership />
    <YoutubeSection />
    <TwitterSection />
    <ArticlePage />
    </>
  )
}

export default App;
