import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan website?',
      answer: 'Waktu pengerjaan bervariasi tergantung paket yang dipilih. Untuk paket UMKM sekitar 1-3 hari, Startup 1-5 hari, dan Business 1-7 hari kerja.',
    },
    {
      question: 'Apakah saya mendapat akses penuh ke website?',
      answer: 'Ya, setelah website selesai, Anda akan mendapat akses penuh ke hosting, domain, dan semua file website. Kami juga memberikan panduan lengkap untuk mengelola website.',
    },
    {
      question: 'Bagaimana sistem revisi bekerja?',
      answer: 'Setiap paket memiliki kuota revisi gratis. Revisi dapat dilakukan pada tahap desain dan development. Revisi tambahan dapat dikenakan biaya terpisah.',
    },
    {
      question: 'Apakah website sudah SEO-friendly?',
      answer: 'Ya, semua website yang kami buat sudah dioptimasi untuk SEO dasar. Untuk paket Startup dan Business, kami memberikan optimasi SEO yang lebih advance.',
    },
    {
      question: 'Bagaimana dengan maintenance website?',
      answer: 'Setiap paket sudah termasuk free maintenance dengan durasi yang berbeda. Setelah periode tersebut, Anda dapat berlangganan maintenance atau mengelola sendiri.',
    },
    {
      question: 'Apakah bisa request fitur khusus?',
      answer: 'Tentu saja! Kami dapat mengembangkan fitur khusus sesuai kebutuhan bisnis Anda dengan biaya tambahan yang akan didiskusikan terlebih dahulu.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Frequently </span>
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-6 py-4 bg-secondary border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;