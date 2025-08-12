import React from 'react';
import { Play, TrendingUp, Users, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const videos = [
    {
      title: 'Client A - 200% Increase in Lead Conversion',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      metric: '200% Conversion Boost'
    },
    {
      title: 'Client B - 3x Higher Engagement Rate',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      metric: '3x Engagement Rate'
    },
    {
      title: 'Client C - Viral Campaign with 1M+ Views',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Eye,
      metric: '1M+ Views'
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative">
      {/* Background IX Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 right-1/4 text-9xl font-bebas text-white transform rotate-45">IX</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider mb-6">
            Creativity That <span className="text-brand-primary">Converts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how our strategic approach translates into high-performance content.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-brand-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-primary transition-colors duration-200">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {video.metric}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <video.icon size={24} className="text-brand-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Strategic campaign results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="mailto:contato@eixoacessoria.com.br"
            className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Let's Create Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;