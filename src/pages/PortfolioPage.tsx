import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Sharel Collections',
      category: 'E-commerce', 
      image: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Platform e-commerce modern untuk fashion dengan sistem inventory terintegrasi.',
      date: '2025-01',
      link: '#',
      tags: ['React', 'Node.js', 'Supabase'],
    },
    {
      id: 2,
      title: 'Restoran 9 Naga',
      category: 'Food & Beverage',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Website restoran dengan sistem reservasi online dan menu digital.',
      date: '2023-12',
      link: '#',
      tags: ['React', 'Express', 'Supabase'],
    },
    {
      id: 3,
      title: 'Klinik Sehat',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sistem informasi klinik dengan appointment booking dan medical records.',
      date: '2023-11',
      link: '#',
      tags: ['React', 'Laravel', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'EduPlatform',
      category: 'Education',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Learning management system dengan video streaming dan quiz interaktif.',
      date: '2023-10',
      link: '#',
      tags: ['Next.js', 'Strapi', 'AWS'],
    },
    {
      id: 5,
      title: 'PropertyHub',
      category: 'Real Estate',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Portal properti dengan virtual tour dan sistem CRM terintegrasi.',
      date: '2023-09',
      link: '#',
      tags: ['React', 'Django', 'Redis'],
    },
    {
      id: 6,
      title: 'FitnessPro',
      category: 'Sports & Fitness',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aplikasi fitness dengan tracking workout dan nutrition planning.',
      date: '2023-08',
      link: '#',
      tags: ['React Native', 'Firebase', 'ML'],
    },
  ];

  const categories = ['All', 'E-commerce', 'Food & Beverage', 'Healthcare', 'Education', 'Real Estate', 'Sports & Fitness', 'IoT'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat berbagai project yang telah kami kerjakan untuk klien dari berbagai industri. 
            Setiap project dirancang dengan standar profesional dan teknologi terdepan.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-red text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;