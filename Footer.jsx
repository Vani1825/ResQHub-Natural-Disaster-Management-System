const Footer = () => {
  return (
    <footer className="bg-primary-dark py-12 mt-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-shield-alt text-accent-red mr-2"></i>
              <span className="text-accent-yellow">ResQHub</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Protecting communities through advanced disaster management technology
              and real-time emergency response coordination.
            </p>
            <p className="text-gray-500 text-sm">© 2025 ResQHub. All rights reserved.</p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Active Alerts
                </a>
              </li>
              <li>
                <a
                  href="https://www.accuweather.com/en/in/india-weather"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Weather Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Emergency */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:112"
                  className="text-red-400 hover:text-red-300 transition-colors font-bold"
                >
                  Call 112
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Report Incident
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Request Help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Medical Emergency
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
