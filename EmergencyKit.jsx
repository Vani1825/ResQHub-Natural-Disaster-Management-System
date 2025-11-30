import { Link } from 'react-router-dom';

const EmergencyKit = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-primary-dark to-primary-light">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Emergency Kits</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be prepared for disasters. Either build your own kit with essentials or choose a 
            fully equipped ResQHub Emergency Kit.
          </p>
        </div>
      </section>

      {/* Essential Items Checklist */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3">🧰</span> Essential Items Checklist
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            These are the must-have items in every emergency kit:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h4 className="text-2xl font-bold mb-4 text-accent-blue">Basic Supplies</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Water (3-day supply per person)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Non-perishable food</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>First aid kit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Flashlight & batteries</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h4 className="text-2xl font-bold mb-4 text-accent-yellow">Personal Needs</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Medicines & prescriptions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Sanitary supplies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Important documents</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Cash & ID cards</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700">
              <h4 className="text-2xl font-bold mb-4 text-accent-red">Safety Tools</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Whistle & multi-tool</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Power bank</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Face masks</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Emergency blanket</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-to-Go Kits */}
      <section className="py-16 px-8 bg-primary-dark/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3">📦</span> ResQHub Ready-to-Go Kits
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            Get fully equipped kits prepared by our team. Available in different variants:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 hover:border-accent-blue transition-all">
              <h4 className="text-2xl font-bold mb-2">Basic Kit</h4>
              <p className="text-gray-300 mb-6">For individuals & small families.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-blue mr-2 mt-2"></i>
                  <span>Water bottles & dry food</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-blue mr-2 mt-2"></i>
                  <span>First aid kit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-blue mr-2 mt-2"></i>
                  <span>Flashlight & batteries</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-blue mr-2 mt-2"></i>
                  <span>Sanitary items</span>
                </li>
              </ul>
              <Link to="/resources?kit=Basic" className="w-full inline-block text-center bg-accent-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Get This Kit
              </Link>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border-2 border-accent-yellow hover:border-accent-yellow transition-all transform scale-105">
              <div className="bg-accent-yellow text-primary-dark px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                POPULAR
              </div>
              <h4 className="text-2xl font-bold mb-2">Advanced Kit</h4>
              <p className="text-gray-300 mb-6">For larger families or high-risk zones.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-yellow mr-2 mt-2"></i>
                  <span>Everything in Basic Kit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-yellow mr-2 mt-2"></i>
                  <span>Power bank & solar torch</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-yellow mr-2 mt-2"></i>
                  <span>Multi-tool & whistle</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-yellow mr-2 mt-2"></i>
                  <span>Emergency blankets</span>
                </li>
              </ul>
              <Link to="/resources?kit=Advanced" className="w-full inline-block text-center bg-accent-yellow hover:bg-yellow-500 text-primary-dark px-6 py-3 rounded-lg font-semibold transition-all">
                Get This Kit
              </Link>
            </div>

            <div className="bg-primary-light rounded-xl p-8 shadow-lg border border-gray-700 hover:border-accent-red transition-all">
              <h4 className="text-2xl font-bold mb-2">Premium Kit</h4>
              <p className="text-gray-300 mb-6">Complete survival kit for professionals.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-red mr-2 mt-2"></i>
                  <span>Everything in Advanced Kit</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-red mr-2 mt-2"></i>
                  <span>Portable water filter</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-red mr-2 mt-2"></i>
                  <span>Emergency radio</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-accent-red mr-2 mt-2"></i>
                  <span>Survival tools kit</span>
                </li>
              </ul>
              <Link to="/resources?kit=Premium" className="w-full inline-block text-center bg-accent-red hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Get This Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Tips */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-info-circle text-accent-blue mr-3"></i>
              Important Tips
            </h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Store your kit in an easily accessible location</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Check and update your kit every 6 months</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Keep copies of important documents in waterproof containers</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-arrow-right text-accent-blue mr-3 mt-1"></i>
                <span>Ensure all family members know where the kit is located</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyKit;
