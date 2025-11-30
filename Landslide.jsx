const Landslide = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-900 to-stone-700 py-24 px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Landslide</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Landslides can cause severe damage to life, property, and the environment. 
            Stay informed and prepared with essential precautions and resources.
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
              <span>Stay alert during heavy rains and monitor local news or alerts.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Avoid living or camping near steep slopes or drainage paths.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Prepare an evacuation plan with your family.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Keep emergency kits ready with food, water, and first aid.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Listen for unusual sounds like cracking trees or shifting rocks.</span>
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
                  <td className="px-6 py-4">2013</td>
                  <td className="px-6 py-4">Uttarakhand, India</td>
                  <td className="px-6 py-4">Massive Landslides due to flash floods</td>
                  <td className="px-6 py-4">5,700+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2014</td>
                  <td className="px-6 py-4">Oso, Washington, USA</td>
                  <td className="px-6 py-4">Major Mudslide</td>
                  <td className="px-6 py-4">43</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2020</td>
                  <td className="px-6 py-4">Myanmar</td>
                  <td className="px-6 py-4">Jade Mine Landslide</td>
                  <td className="px-6 py-4">170+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2021</td>
                  <td className="px-6 py-4">Maharashtra, India</td>
                  <td className="px-6 py-4">Heavy Rain-induced Landslides</td>
                  <td className="px-6 py-4">200+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landslide;
