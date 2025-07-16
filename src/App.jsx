import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Container from "./components/container";

function App() {
  return (
    <div className="bg-[#F5F5DC]">
      <Container>
        <Navbar />
        <HomePage />
        <div className="h-screen"></div>
      </Container>
    </div>
  );
}

export default App;
