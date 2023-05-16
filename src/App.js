import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';
import About from './components/About';
import Coupon from './components/Coupon';
import Why from './components/Why';
import MenuCarousel from './components/MenuCarousel';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Coupon />
      <Why />
      <MenuCarousel />
    </>
  );
}
export default App;
