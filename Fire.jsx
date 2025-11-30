const Fire = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-700 py-24 px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Forest Fire</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Forest fires are uncontrolled fires in vegetation areas that can spread quickly. 
            Learn how to prevent them and stay safe during outbreaks.
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
              <span>Evacuate immediately if a wildfire is approaching your area.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Keep emergency kits ready including masks, water, and food.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Close all windows, doors, and vents to prevent smoke from entering.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Follow official evacuation routes and avoid driving through fire zones.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Stay updated on local news and wildfire alerts.</span>
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
                  <th className="px-6 py-4 text-left">Area Burned</th>
                  <th className="px-6 py-4 text-left">Casualties</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2020</td>
                  <td className="px-6 py-4">Australia</td>
                  <td className="px-6 py-4">18M hectares</td>
                  <td className="px-6 py-4">33+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2018</td>
                  <td className="px-6 py-4">California, USA</td>
                  <td className="px-6 py-4">1.9M acres</td>
                  <td className="px-6 py-4">85+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2019</td>
                  <td className="px-6 py-4">Amazon, Brazil</td>
                  <td className="px-6 py-4">9.5M hectares</td>
                  <td className="px-6 py-4">50+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fire;
