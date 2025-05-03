import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-green-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3" 
          alt="Farming in Rwanda" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Quality Agricultural Supplies for Rwandan Farmers
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From certified seeds to premium fertilizers, we provide everything you need to maximize your farm's productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn btn-primary px-6 py-3 flex items-center gap-2">
              <span>Shop Now</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 