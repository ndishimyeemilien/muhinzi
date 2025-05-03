import  Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import FarmingTips from '../components/FarmingTips';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FarmingTips />
      <Testimonials />
    </div>
  );
};

export default HomePage;
 