import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/container";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="h-18 lg:h-22" />
      <main className="flex-grow">
        <Container>
          <AppRoutes />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
