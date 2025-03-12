import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SearchResults from "./components/SearchResults"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>

  );
}

export default App;
