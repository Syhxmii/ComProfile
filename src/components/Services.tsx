import React from 'react';
import { Monitor, Smartphone, Search, Zap, Shield, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Desain website modern dan responsif yang memukau pengunjung Anda.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Website yang sempurna di semua perangkat mobile dan desktop.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Optimasi SEO untuk meningkatkan visibility di mesin pencari.',
    },
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'Kecepatan loading website yang optimal untuk pengalaman terbaik.',
    },
    {
      icon: Shield,
      title: 'Security & SSL',
      description: 'Keamanan tingkat enterprise dengan sertifikat SSL gratis.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Tim support yang siap membantu Anda kapan saja.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Layanan Terbaik
            </span>
            <span className="text-gray-900"> untuk Bisnis Anda</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan solusi digital lengkap untuk mengembangkan bisnis Anda 
            dengan teknologi terdepan dan standar profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;