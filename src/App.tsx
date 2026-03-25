import { Switch, Route, Router } from 'wouter';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { HealthBenefits } from './components/HealthBenefits';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Calculator } from './components/Calculator';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <HealthBenefits />
      <Services />
      <Testimonials />
      <Calculator />
      <FloatingCTA />
    </main>
  );
}

export default function App() {
  const baseRouterPath = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  return (
    <ErrorBoundary>
      <div className="font-sans text-gray-900 bg-white min-h-screen">
        <Header />
        <Router base={baseRouterPath}>
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
