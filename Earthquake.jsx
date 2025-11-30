const Earthquake = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 py-24 px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Earthquake</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            An earthquake is the shaking of the Earth's surface caused by sudden movement of the Earth's crust. 
            Learn how to stay safe and prepared.
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
              <span>Drop, Cover, and Hold On during shaking.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Keep emergency kits ready at home.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Identify safe spots in each room.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>Avoid using elevators.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              <span>After earthquake, check for injuries and damages.</span>
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
                  <th className="px-6 py-4 text-left">Magnitude</th>
                  <th className="px-6 py-4 text-left">Casualties</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2011</td>
                  <td className="px-6 py-4">Japan</td>
                  <td className="px-6 py-4">9.0</td>
                  <td className="px-6 py-4">15,897</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2005</td>
                  <td className="px-6 py-4">Kashmir</td>
                  <td className="px-6 py-4">7.6</td>
                  <td className="px-6 py-4">86,000+</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">2010</td>
                  <td className="px-6 py-4">Haiti</td>
                  <td className="px-6 py-4">7.0</td>
                  <td className="px-6 py-4">230,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Earthquake;
