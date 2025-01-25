import Header from './components/Header';
import Hero from './components/Hero';
import DiagnosticTools from './components/DiagnosticTools';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1f2b]">
      <Header />
      <Hero />
      <DiagnosticTools />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;