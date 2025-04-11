export default function Metrics() {
    return (
      <section className="py-16 bg-black text-center px-6">
        <h2 className="text-3xl font-bold text-gradient mb-10">Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            ['Total Users', '86,240'],
            ['Licenses Processed', '34,120'],
            ['Documents Verified', '120,000+'],
            ['Avg Time Saved', '72%']
          ].map(([title, stat], index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400">{stat}</h4>
              <p className="text-gray-300 mt-2">{title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }