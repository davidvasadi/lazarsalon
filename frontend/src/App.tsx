import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BackToTop } from './components/BackToTop';
import { Privacy } from './pages/Privacy';
export function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="w-full min-h-screen bg-[#FEFEFE] text-[#1D1D1E]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}
