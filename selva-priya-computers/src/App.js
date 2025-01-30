import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/Services/Services"; // Example
import PricingPage from "./pages/Pricing"; // Example
import AboutPage from "./pages/About"; // Example
import ContactPage from "./pages/Contact"; // Example

function App() {
  return (
    <Router>
      <AppContainer>
        {/* <NavigationBar /> */}
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

// Styled component to wrap the entire app
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full viewport height */
`;

// Styled component for the main content
const MainContent = styled.main`
  flex: 1; /* Makes the content area flexible */
  padding: 20px; /* Add padding if needed */
`;
export default App;
