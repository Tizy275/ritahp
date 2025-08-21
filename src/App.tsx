import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AGB from "./pages/AGB";
import Datenschutz from "./pages/Datenschutz";
import "./App.css";

function AppLayout() {
  const location = useLocation();

  // Definiere die Seiten, auf denen die Navbar NICHT angezeigt werden soll
  const hideNavbarRoutes = ["/agb", "/datenschutz"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="app">
      {!shouldHideNavbar && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
