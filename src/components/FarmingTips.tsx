import  { Check } from 'lucide-react';

const FarmingTips = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Farming Tips for Better Yields
            </h2>
            <p className="text-gray-600 mb-6">
              Using agricultural inputs correctly is essential for maximizing your farm's productivity. Here are some best practices to follow:
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Soil Testing</h3>
                  <p className="text-gray-600">Test your soil before applying fertilizers to determine the exact nutrient requirements.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Proper Application</h3>
                  <p className="text-gray-600">Follow recommended application rates and methods for all agricultural inputs.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Integrated Pest Management</h3>
                  <p className="text-gray-600">Combine different pest control strategies to minimize environmental impact and costs.</p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Crop Rotation</h3>
                  <p className="text-gray-600">Rotate crops to prevent soil depletion and reduce pest and disease problems.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3" 
              alt="Farming techniques" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmingTips;
 