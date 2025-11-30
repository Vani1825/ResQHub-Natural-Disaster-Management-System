import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Resources = () => {
  const [requestType, setRequestType] = useState('');
  const [kitType, setKitType] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const kit = params.get('kit');
    if (kit) {
      setRequestType('kit');
      setKitType(kit);
      // scroll to form when arriving from kit selection
      const el = document.getElementById('request-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage('✅ Your request has been submitted! We will contact you soon.');
    e.target.reset();
    setRequestType('');
    setKitType('');
    setTimeout(() => setFormMessage(''), 5000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 py-24 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Request Resources</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Need emergency kits, supplies, or assistance? Submit your request below.
          </p>
          <a href="#request-form" className="btn btn-primary inline-block">
            Request Now
          </a>
        </div>
      </section>

      {/* Request Options */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Can You Request?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-blue transition-all">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-4">Emergency Kits</h3>
              <p className="text-gray-300">
                Request pre-assembled emergency kits (Basic, Advanced, or Premium).
              </p>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-yellow transition-all">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Medical Supplies</h3>
              <p className="text-gray-300">
                Request first aid kits, medicines, or medical equipment.
              </p>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-green transition-all">
              <div className="text-6xl mb-4">🍲</div>
              <h3 className="text-2xl font-bold mb-4">Food & Water</h3>
              <p className="text-gray-300">
                Request food supplies, drinking water, or nutrition packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16 px-8 bg-primary-dark/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Submit Your Request</h2>

          <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="request-type" className="block text-sm font-semibold mb-2">
                  Request Type
                </label>
                <select
                  id="request-type"
                  required
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="kit">Emergency Kit</option>
                  <option value="medical">Medical Supplies</option>
                  <option value="food">Food & Water</option>
                  <option value="shelter">Shelter Assistance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Emergency Kit Fields */}
              {requestType === 'kit' && (
                <div>
                  <label htmlFor="kit-type" className="block text-sm font-semibold mb-2">
                    Kit Type
                  </label>
                  <select
                    id="kit-type"
                    required
                    value={kitType}
                    onChange={(e) => setKitType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                  >
                    <option value="">Select Kit</option>
                    <option value="Basic">Basic Kit</option>
                    <option value="Advanced">Advanced Kit</option>
                    <option value="Premium">Premium Kit</option>
                  </select>
                </div>
              )}

              {/* Medical Supplies Fields */}
              {requestType === 'medical' && (
                <div>
                  <label htmlFor="medical-items" className="block text-sm font-semibold mb-2">
                    Required Medical Items
                  </label>
                  <textarea
                    id="medical-items"
                    placeholder="List the medical supplies you need..."
                    rows="3"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                  ></textarea>
                </div>
              )}

              {/* Food & Water Fields */}
              {requestType === 'food' && (
                <div>
                  <label htmlFor="food-items" className="block text-sm font-semibold mb-2">
                    Required Food/Water Items
                  </label>
                  <textarea
                    id="food-items"
                    placeholder="List the food and water supplies you need..."
                    rows="3"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                  ></textarea>
                </div>
              )}

              {/* Other Type Fields */}
              {requestType === 'other' && (
                <div>
                  <label htmlFor="other-details" className="block text-sm font-semibold mb-2">
                    Request Details
                  </label>
                  <textarea
                    id="other-details"
                    placeholder="Describe what you need..."
                    rows="3"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                  ></textarea>
                </div>
              )}

              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
                  Quantity Needed
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter quantity"
                  min="1"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="delivery-address" className="block text-sm font-semibold mb-2">
                  Delivery Address
                </label>
                <textarea
                  id="delivery-address"
                  placeholder="Enter complete delivery address"
                  rows="3"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold mb-2">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                >
                  <option value="">Select urgency</option>
                  <option value="critical">Critical (Within 24 hours)</option>
                  <option value="high">High (Within 3 days)</option>
                  <option value="medium">Medium (Within 1 week)</option>
                  <option value="low">Low (Flexible timing)</option>
                </select>
              </div>

              <div>
                <label htmlFor="additional-info" className="block text-sm font-semibold mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additional-info"
                  placeholder="Any additional details that might help us..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-blue hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Submit Request
              </button>
            </form>

            {formMessage && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold">
                {formMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-info-circle text-accent-blue mr-3"></i>
              Important Information
            </h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>All requests are reviewed within 24 hours</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Critical requests are prioritized for immediate response</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>You will receive a confirmation email once your request is approved</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Delivery is free for all emergency resource requests</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
