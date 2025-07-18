import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Container from "./components/container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F5F5DC]">
      <Container>
        <Navbar />
        <HomePage />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
