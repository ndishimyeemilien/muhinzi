import  { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
  };
  
  return (
    <div>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Have questions about our products or need agricultural advice? Get in touch with us.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+250 788 123 456</p>
            <p className="text-gray-600">+250 722 987 654</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-1">info@agroconnect.rw</p>
            <p className="text-gray-600">sales@agroconnect.rw</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-12 h-12 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600 mb-1">KK 15 Ave, Kicukiro</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-semibold">Thank you for contacting us!</p>
                <p>We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Farming Advice">Farming Advice</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary px-6 py-3">
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-80">
              {/* In a real app, this would be a map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 font-medium">Store Location Map</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Opening Hours</h3>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
 