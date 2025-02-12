import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";
import Featured from "./components/Featured";
import Recommendations from "./components/Recommendations";
import FeaturedAlt from "./components/FeaturedAlt";
import PopularSearches from "./components/PopularSearches";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <NewArrivals />  
      <Featured />
      <Recommendations /> 
      <FeaturedAlt />
      <PopularSearches />
      <Footer />
    </div>
  );
}

export default App;
