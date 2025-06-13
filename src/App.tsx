import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogosSection } from './components/LogosSection';
import { FeatureSection } from './components/FeatureSection';
import { StatsSection } from './components/StatsSection';
import { StepsSection } from './components/StepsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { Dashboard } from './components/Dashboard';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onLoginClick={() => setShowLogin(true)} />
      <main>
        <HeroSection />
        <LogosSection />
        <TestimonialsSection />
        <StatsSection />
        <FeatureSection />
        <StepsSection />
      </main>
      <Footer />
      
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;