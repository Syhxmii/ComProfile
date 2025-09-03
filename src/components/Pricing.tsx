import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'UMKM',
      price: 'Rp 1.500.000',
      period: 'sekali bayar',
      popular: false,
      features: [
        'Website Siap Pakai',
        'Free Domain .com',
        'Free Copywriting',
        'SSL Security (HTTPS)',
        '1 Landing Page (Scroll Panjang)',
        'Responsif Mobile & Desktop',
        'Optimasi Kecepatan',
        'Integrasi Direct WhatsApp',
        'Hosting 1 Tahun',
        'Free Maintenance 15 Hari',
      ],
    },
    {
      name: 'Startup',
      price: 'Rp 3.500.000',
      period: 'sekali bayar',
      popular: true,
      features: [
        'Website Siap Pakai',
        'Free Domain .com',
        'Free Copywriting',
        'SSL Security (HTTPS)',
        'Desain Visual Kompleks (CTA, Form, Galeri)',
        'Responsif Mobile & Desktop',
        'Optimasi Kecepatan',
        'Optimasi SEO Basic',
        'Integrasi Form + WhatsApp',
        'Integrasi Social Media',
        'Hosting 1 Tahun',
        'Free Maintenance 1 Bulan',
      ],
    },
    {
      name: 'Business',
      price: 'Rp 5.000.000',
      period: 'sekali bayar',
      popular: false,
      features: [
        'Website Siap Pakai',
        'Free Domain .com',
        'Free Copywriting',
        'SSL Security (HTTPS)',
        'Desain Premium Kompleks',
        'Responsif Mobile & Desktop',
        'Optimasi Kecepatan',
        'Optimasi SEO Lanjutan',
        'Integrasi Form + WhatsApp',
        'Integrasi Google Maps',
        'Integrasi Social Media',
        'Hosting 1 Tahun',
        'Free Maintenance 1,5 Bulan',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Paket </span>
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Terjangkau
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. 
            Semua paket sudah termasuk hosting dan domain gratis!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-accent shadow-xl pt-12' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-red text-white px-4 py-2 rounded-full flex items-center space-x-1 text-sm font-semibold whitespace-nowrap">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-red bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-red hover:bg-gradient-red-hover text-white shadow-lg hover:shadow-xl'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;