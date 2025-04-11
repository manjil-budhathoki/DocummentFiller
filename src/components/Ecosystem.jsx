export default function Ecosystem() {
    return (
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6">
        <h2 className="text-3xl font-bold text-gradient mb-10">Supported by the Ecosystem</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Our system integrates with mock governmental services like MoTCA (Ministry of Transport and Civil Aviation), NepalGov APIs, and Digital ID services to provide a seamless experience.
        </p>
        <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
          {['NepalGov API', 'MoTCA Digital', 'eKYC Verify', 'Citizenship Sync'].map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur shadow-md text-white hover:scale-105 transition"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>
    );
  }