import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-gradient-red text-white px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Trusted</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-red bg-clip-text text-transparent">
                Bangun Website
              </span>
              <br />
              <span className="text-gray-900">
                Profesional dalam
              </span>
              <br />
              <span className="bg-gradient-red bg-clip-text text-transparent">
                Hitungan Hari!
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Upgrade dari UMKM hingga bisnis besar, SynaWorks hadir untuk membuat brand Anda 
              tampil percaya diri di dunia digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://api.whatsapp.com/send?phone=62821122334&text=Halo%20kak👋🏻%2C%20Saya%20tertarik%20bikin%20website%20untuk%20bisnis%20saya✨"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-red hover:bg-gradient-red-hover text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <Link 
                to="/portfolio"
                className="border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Lihat Portfolio
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start mt-12 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-red bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-red bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-red bg-clip-text text-transparent">7 Days</div>
                <div className="text-sm text-gray-600">Average Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Placeholder for Spline 3D illustration */}
              <div className="w-96 h-96 bg-gradient-to-br from-accent/10 to-accent-dark/20 rounded-3xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-red rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="text-4xl text-white">🚀</div>
                  </div>
                  <p className="text-gray-600 font-medium">3D Hero Illustration</p>
                  <p className="text-sm text-gray-500">Spline Integration</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent-dark/20 rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;