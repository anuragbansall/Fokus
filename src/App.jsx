import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Container from "./components/container";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Container>
          {/* <HomePage /> */}
          <ProductsPage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
