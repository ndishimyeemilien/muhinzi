import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jean Mutabazi",
    location: "Musanze",
    quote: "AgroConnect has transformed my farming business. Their fertilizers increased my potato yield by 40% last season!",
    image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Claire Uwimana",
    location: "Huye",
    quote: "I've been buying seeds from AgroConnect for three years. Their quality and fast delivery make them my go-to supplier.",
    image: "https://images.unsplash.com/photo-1472718888560-1a1292f1cccb?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    rating: 4
  },
  {
    id: 3,
    name: "Emmanuel Habimana",
    location: "Nyagatare",
    quote: "As a livestock farmer, finding quality feed supplements was a challenge until I discovered AgroConnect. Their products are reliable and affordable.",
    image: "https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < currentTestimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-bold">{currentTestimonial.name}</p>
                <p className="text-sm text-gray-600">Farmer in {currentTestimonial.location}</p>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
 