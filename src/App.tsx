import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';

const Research = lazy(() => import('./components/Research'));
const Industries = lazy(() => import('./components/Industries'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Suspense fallback={<LoadingSpinner />}>
        <Research />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;