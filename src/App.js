import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';
import About from './components/About';
import Coupon from './components/Coupon';
import Why from './components/Why';
import MenuCarousel from './components/MenuCarousel';
import BigCarousel from './components/BigCarousel';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Coupon />
      <Why />
      <MenuCarousel />
      <BigCarousel />
      <Testimonials />
    </>
  );
}
export default App;
