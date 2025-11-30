const Flood = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Flood</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Floods are an overflow of water that submerges land, often caused by heavy rainfall, 
            river overflow, or dam break. Stay prepared and informed to protect yourself.
          </p>
        </div>
      </section>

      {/* Precautions Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Precautions & Safety Measures</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Move to higher ground immediately during heavy rainfall or flood warnings.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Avoid walking or driving through floodwaters.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Keep emergency kits, water, and essential supplies ready.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Stay updated with official weather alerts and evacuation instructions.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Do not touch electrical equipment if wet or standing in water.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Historical Data */}
      <section className="py-16 px-8 bg-primary-dark/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Historical Data / Affected Areas</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-primary-light rounded-lg overflow-hidden">
              <thead className="bg-primary-dark">
                <tr>
                  <th className="px-6 py-4 text-left">Year</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Damage</th>
                  <th className="px-6 py-4 text-left">Casualties</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2017</td>
                  <td className="px-6 py-4">Kerala, India</td>
                  <td className="px-6 py-4">Severe Flooding</td>
                  <td className="px-6 py-4">500+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2005</td>
                  <td className="px-6 py-4">New Orleans, USA</td>
                  <td className="px-6 py-4">Hurricane Katrina Flood</td>
                  <td className="px-6 py-4">1,800+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2019</td>
                  <td className="px-6 py-4">Venice, Italy</td>
                  <td className="px-6 py-4">Severe Flooding</td>
                  <td className="px-6 py-4">30+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flood;
