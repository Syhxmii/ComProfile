import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-accent-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membawa Bisnis Anda ke Level Selanjutnya?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Jangan biarkan kompetitor Anda unggul di dunia digital. 
            Mulai konsultasi gratis sekarang dan dapatkan penawaran terbaik!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://api.whatsapp.com/send?phone=62821122334&text=Halo%20kak👋🏻%2C%20Saya%20tertarik%20bikin%20website%20untuk%20bisnis%20saya✨"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Lihat Portfolio
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free Konsultasi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No Hidden Cost</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;