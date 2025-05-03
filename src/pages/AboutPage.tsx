import  { Check, Users, Award, ThumbsUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About AgroConnect Rwanda</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Empowering Rwandan farmers with quality agricultural supplies since 2018.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At AgroConnect Rwanda, our mission is to improve agricultural productivity in Rwanda by providing farmers with access to high-quality inputs, expert advice, and reliable delivery services.
            </p>
            <p className="text-gray-600">
              We work directly with certified suppliers and manufacturers to ensure that all products meet the highest standards and are suitable for Rwanda's unique agricultural conditions.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1454179083322-198bb4daae41?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3" 
              alt="Rwandan farming" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All our products are RICA certified and sourced from trusted suppliers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our team includes agricultural experts who can provide guidance on product usage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer fair prices and special discounts for farmer cooperatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-600">
                We deliver to all districts in Rwanda, ensuring farmers everywhere have access.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Commitment to Rwanda's Agriculture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                As a Rwandan company, we understand the unique challenges and opportunities in the country's agricultural sector. We're committed to supporting the government's initiatives to increase agricultural productivity and ensure food security.
              </p>
              <p className="text-gray-600">
                Through our partnerships with local and international suppliers, we bring the best agricultural technologies and products to Rwandan farmers, helping them improve yields and increase profitability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Our contributions include:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Training farmers on proper use of agricultural inputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Supporting agricultural cooperatives with bulk discounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Providing technical advice on crop management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Promoting environmentally sustainable farming practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We work with leading agricultural input manufacturers and suppliers to bring quality products to Rwanda.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold">Rwanda Fertilizer Company</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold">Agropy Ltd</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold">INGABO Plant Health</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold">DAPS Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
 