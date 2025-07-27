import React from 'react';

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Real Impact</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Our randomized response instruments reveal biases that traditional polling misses, 
          delivering measurably superior accuracy in real-world studies.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-12">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
              <span className="font-semibold text-gray-900">2020 Midwest Polling</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">Case Study</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <span className="block text-xs text-gray-600 mb-1 uppercase tracking-wide">Traditional Poll</span>
                  <span className="block text-2xl font-bold text-gray-900">43%</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-600/10">
                  <span className="block text-xs text-gray-600 mb-1 uppercase tracking-wide">With Our Method</span>
                  <span className="block text-2xl font-bold text-gray-900">51%</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-500/10">
                  <span className="block text-xs text-gray-600 mb-1 uppercase tracking-wide">Actual Result</span>
                  <span className="block text-2xl font-bold text-gray-900">52%</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed p-4 bg-blue-600/5 rounded-lg border-l-4 border-blue-600">
                Traditional polls missed Trump supporters who were less likely to respond. Our randomized instruments detected and corrected this bias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;