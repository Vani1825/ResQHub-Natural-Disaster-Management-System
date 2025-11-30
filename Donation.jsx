import { useState } from 'react';

const Donation = () => {
  const [donationType, setDonationType] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage('✅ Thank you for your donation! We will contact you soon.');
    e.target.reset();
    setDonationType('');
    setTimeout(() => setFormMessage(''), 5000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-700 py-24 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Support Disaster Relief Efforts</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your contribution can save lives and bring hope to those in need.
          </p>
          <a href="#donation-form" className="btn btn-primary inline-block">
            Donate Now
          </a>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Ways You Can Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-yellow transition-all">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4">Monetary Donation</h3>
              <p className="text-gray-300">
                Provide funds to support relief camps, shelters, and medical aid.
              </p>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-blue transition-all">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold mb-4">Supplies</h3>
              <p className="text-gray-300">
                Contribute essentials like food, water, blankets, or medicines.
              </p>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 text-center hover:border-accent-green transition-all">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-300">
                Offer your time and skills to aid rescue and recovery operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="py-16 px-8 bg-primary-dark/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Make a Donation</h2>

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
                <label htmlFor="donation-type" className="block text-sm font-semibold mb-2">
                  Donation Type
                </label>
                <select
                  id="donation-type"
                  required
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="money">Monetary Donation</option>
                  <option value="supplies">Supplies</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              {/* Monetary Donation Fields */}
              {donationType === 'money' && (
                <div>
                  <label htmlFor="amount" className="block text-sm font-semibold mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                  />
                </div>
              )}

              {/* Supplies Fields */}
              {donationType === 'supplies' && (
                <>
                  <div>
                    <label htmlFor="supply-type" className="block text-sm font-semibold mb-2">
                      Supply Type
                    </label>
                    <input
                      type="text"
                      id="supply-type"
                      placeholder="e.g. Food, Clothes, Medicine"
                      className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="supply-quantity" className="block text-sm font-semibold mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="supply-quantity"
                      placeholder="Enter quantity"
                      min="1"
                      className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="pickup-address" className="block text-sm font-semibold mb-2">
                      Pickup Address
                    </label>
                    <textarea
                      id="pickup-address"
                      placeholder="Enter pickup address"
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Volunteer Fields */}
              {donationType === 'volunteer' && (
                <>
                  <div>
                    <label htmlFor="skills" className="block text-sm font-semibold mb-2">
                      Your Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      placeholder="e.g. Medical, Rescue, Communication"
                      className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold mb-2">
                      Availability
                    </label>
                    <input
                      type="text"
                      id="availability"
                      placeholder="e.g. Weekends, Full-time"
                      className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  placeholder="Any additional information..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-yellow hover:bg-yellow-500 text-primary-dark px-6 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Submit Donation
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

      {/* Impact Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Your Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-light rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="text-4xl font-bold text-accent-yellow mb-2">₹50L+</div>
              <p className="text-gray-300">Funds Raised</p>
            </div>
            <div className="bg-primary-light rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="text-4xl font-bold text-accent-blue mb-2">10K+</div>
              <p className="text-gray-300">Families Helped</p>
            </div>
            <div className="bg-primary-light rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="text-4xl font-bold text-accent-green mb-2">500+</div>
              <p className="text-gray-300">Volunteers</p>
            </div>
            <div className="bg-primary-light rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="text-4xl font-bold text-accent-red mb-2">25+</div>
              <p className="text-gray-300">Relief Camps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
