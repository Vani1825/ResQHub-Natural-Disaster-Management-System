import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleShelterSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const shelters = [
    {
      name: 'Night Shelter',
      status: 'Available',
      address: 'Shelters (MC) PGIMER, GMCH-32, GMSH-16, ISBT-17/43',
      capacity: '500 people',
      distance: '5 km',
      facilities: ['Medical Aid', 'Food Service', 'Beds', 'Heaters'],
      phone: '(555) 123-4567',
      mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Night%20Shelter%2CPQPH%2BWCH%2C%2017G%2C%2017F%2C%20Sector%2017%2C%20F%2C%20Chandigarh%2C%20160017%2C%20India'
    },
    {
      name: 'Shelter Hub-2',
      status: 'Available',
      address: 'Chandigarh Sector-9',
      capacity: '800 people',
      distance: '2.2 km',
      facilities: ['Medical Aid', 'Food Service', 'Childcare', 'Parking'],
      phone: '(555) 234-5678',
      mapLink: 'https://www.google.com/maps/dir/?api=1&destination=Night%20Shelter%2CPQPH%2BWCH%2C%2017G%2C%2017F%2C%20Sector%2017%2C%20F%2C%20Chandigarh%2C%20160017%2C%20India'
    },
    {
      name: 'Night Shelter – Shri Kali Devi Temple',
      status: 'Nearly Full',
      address: 'Near Shri Kali Devi Temple, Patiala',
      capacity: '300 people',
      distance: '3.4 km',
      facilities: ['Food Service', 'Beds', 'Heaters'],
      phone: '96460 64512',
      mapLink: 'https://www.google.com/maps/search/Shri+Kali+Devi+Temple+Mall+Road+Patiala/@30.3273,76.4027,15z?entry=ttu&utm_source=chatgpt.com'
    }
  ];

  const filteredShelters = shelters.filter(shelter =>
    shelter.name.toLowerCase().includes(searchQuery) ||
    shelter.address.toLowerCase().includes(searchQuery)
  );

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormMessage('✅ OK Form Submitted');
    e.target.reset();
    setTimeout(() => setFormMessage(''), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light py-32 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side */}
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <img 
                  src="https://i.postimg.cc/WbrvCfb8/image.png" 
                  alt="Shield Icon" 
                  className="w-16 h-16 mr-4"
                />
                <h1 className="text-5xl font-bold">
                  <span className="text-accent-red">ResQ</span>
                  <span className="text-accent-yellow">Hub</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Your comprehensive disaster management platform – 
                Stay informed, stay prepared, stay safe
              </p>
              <div className="flex gap-4">
                <a href="#disasters" className="btn btn-primary">
                  View Disasters
                </a>
                <a href="#shelters" className="btn btn-outline">
                  Find Shelter
                </a>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-red-500/30">
                <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-2"></i>
                <h2 className="text-3xl font-bold">24/7</h2>
                <p className="text-gray-300">Monitoring</p>
              </div>
              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-blue-500/30">
                <i className="fas fa-map-marker-alt text-4xl text-blue-500 mb-2"></i>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-300">Shelters</p>
              </div>
              <div className="bg-green-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500/30">
                <i className="fas fa-box text-4xl text-green-500 mb-2"></i>
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-gray-300">Emergency Kits</p>
              </div>
              <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-purple-500/30">
                <i className="fas fa-users text-4xl text-purple-500 mb-2"></i>
                <h2 className="text-3xl font-bold">1M+</h2>
                <p className="text-gray-300">Lives Protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Types Section */}
      <section id="disasters" className="py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Disaster Types</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Learn how to stay safe and prepared during different disasters
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/flood" className="group relative overflow-hidden rounded-xl shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://i.postimg.cc/gchtWx1y/image.png" 
                alt="Flood" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Flood</h3>
              </div>
            </Link>

            <Link to="/earthquake" className="group relative overflow-hidden rounded-xl shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://i.postimg.cc/T36ZSVwW/image.png" 
                alt="Earthquake" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Earthquake</h3>
              </div>
            </Link>

            <Link to="/fire" className="group relative overflow-hidden rounded-xl shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://i.postimg.cc/25x9gMts/image.png" 
                alt="Fire" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Forest Fire</h3>
              </div>
            </Link>

            <Link to="/landslide" className="group relative overflow-hidden rounded-xl shadow-xl transition-transform hover:scale-105">
              <img 
                src="https://i.postimg.cc/W18fHxCQ/image.png" 
                alt="Landslide" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">Landslide</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Shelters Section */}
      <section id="shelters" className="py-20 px-8 bg-primary-dark/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Emergency Shelters</h2>
          <p className="text-xl text-gray-300 text-center mb-8">
            Find safe shelter locations near you with real-time availability
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative">
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Enter your location..."
              value={searchQuery}
              onChange={handleShelterSearch}
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-primary-light text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
            />
          </div>

          {/* Shelter Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShelters.map((shelter, index) => (
              <div key={index} className="bg-primary-light rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{shelter.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    shelter.status === 'Available' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {shelter.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 flex items-start">
                  <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                  {shelter.address}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Capacity</p>
                    <h4 className="font-semibold">{shelter.capacity}</h4>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Distance</p>
                    <h4 className="font-semibold">{shelter.distance}</h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {shelter.facilities.map((facility, idx) => (
                    <span key={idx} className="bg-primary-dark px-3 py-1 rounded-full text-sm">
                      {facility}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <p className="text-gray-300">
                    <i className="fas fa-phone mr-2"></i>
                    {shelter.phone}
                  </p>
                  <a 
                    href={shelter.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-blue-400 transition-colors"
                  >
                    <i className="fas fa-location-arrow mr-1"></i>
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section id="resources" className="py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Emergency Resources</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Essential information and contacts for emergency situations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emergency Contacts */}
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fa-solid fa-phone-volume text-accent-red mr-3"></i>
                Emergency Contacts
              </h3>

              <div className="space-y-4">
                <a href="tel:112" className="flex justify-between items-center p-4 bg-primary-dark rounded-lg hover:bg-primary-darker transition-all cursor-pointer">
                  <div>
                    <strong className="block">Emergency Services</strong>
                    <small className="text-gray-400">Primary</small>
                  </div>
                  <span className="text-2xl font-bold text-accent-red">112</span>
                </a>

                <a href="tel:01722542180" className="flex justify-between items-center p-4 bg-primary-dark rounded-lg hover:bg-primary-darker transition-all cursor-pointer">
                  <div>
                    <strong className="block">Red Cross</strong>
                    <small className="text-gray-400">Relief</small>
                  </div>
                  <span className="text-xl font-bold text-accent-blue">0172 254 2180</span>
                </a>

                <a href="tel:1122" className="flex justify-between items-center p-4 bg-primary-dark rounded-lg hover:bg-primary-darker transition-all cursor-pointer">
                  <div>
                    <strong className="block">RESCUE Punjab</strong>
                    <small className="text-gray-400">Federal</small>
                  </div>
                  <span className="text-2xl font-bold text-accent-yellow">1122</span>
                </a>

                <a href="tel:100" className="flex justify-between items-center p-4 bg-primary-dark rounded-lg hover:bg-primary-darker transition-all cursor-pointer">
                  <div>
                    <strong className="block">Local Emergency</strong>
                    <small className="text-gray-400">Local</small>
                  </div>
                  <span className="text-2xl font-bold text-accent-green">100</span>
                </a>
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fa-solid fa-circle-info text-accent-blue mr-3"></i>
                Safety Guidelines
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <i className="fa-solid fa-bolt text-yellow-400 mr-2"></i>
                    During Earthquake
                  </h4>
                  <p className="text-gray-300">
                    Drop, Cover, and Hold On. Stay away from windows and heavy objects.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <i className="fa-solid fa-water text-blue-400 mr-2"></i>
                    During Hurricane
                  </h4>
                  <p className="text-gray-300">
                    Stay indoors, away from windows. Have emergency supplies ready.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center">
                    <i className="fa-solid fa-fire text-red-400 mr-2"></i>
                    During Wildfire
                  </h4>
                  <p className="text-gray-300">
                    Evacuate immediately if ordered. Close all windows and doors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 px-8 bg-primary-dark/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Emergency Support</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Need immediate assistance or have questions about disaster preparedness?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Actions */}
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => window.location.href='tel:112'}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Emergency Services
                </button>

                <button 
                  onClick={() => window.location.href='tel:112'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  <i className="fas fa-bell mr-2"></i>
                  Report Emergency
                </button>

                <button 
                  onClick={() => window.location.href='#shelters'}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Find Nearest Shelter
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none"
                />
                <textarea
                  placeholder="Describe your situation..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-primary-dark text-white border border-gray-600 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-accent-yellow hover:bg-yellow-500 text-primary-dark px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>

              {formMessage && (
                <p className="text-green-400 mt-4 text-center font-semibold">
                  {formMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
