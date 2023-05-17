import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';
import About from './components/About';
import Coupon from './components/Coupon';
import Why from './components/Why';
import MenuCarousel from './components/MenuCarousel';
import BigCarousel from './components/BigCarousel';
import Testimonials from './components/Testimonials';
import MealKitsCarousel from './components/MealKitsCarousel';



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
      <MealKitsCarousel/>
    </>
  );
}
export default App;
