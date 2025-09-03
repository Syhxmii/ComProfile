import React from 'react';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Website dengan desain modern dan profesional yang meningkatkan kredibilitas bisnis Anda.',
      gradient: 'from-accent to-accent-dark',
    },
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Dikerjakan oleh developer dan designer berpengalaman dengan track record 100+ project.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Clock,
      title: 'Pengerjaan Cepat',
      description: 'Proses pengerjaan yang efisien tanpa mengorbankan kualitas, rata-rata 3 hari selesai.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: Lightbulb,
      title: 'Solusi Inovatif',
      description: 'Menggunakan teknologi terdepan dan solusi kreatif untuk kebutuhan digital bisnis Anda.',
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Mengapa Memilih </span>
            <span className="bg-gradient-red bg-clip-text text-transparent">
              SynaWorks?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami memberikan lebih dari sekedar website. Kami membantu bisnis Anda 
            berkembang dengan solusi digital yang tepat sasaran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;