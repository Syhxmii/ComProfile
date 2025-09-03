import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Filter, Search } from 'lucide-react';

interface QueueItem {
  id: number;
  projectName: string;
  client: string;
  status: 'waiting' | 'in-progress' | 'review' | 'completed';
  deadline: string;
  progress: number;
  package: string;
}

const QueuesPage: React.FC = () => {
  const [queues, setQueues] = useState<QueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData: QueueItem[] = [
        {
          id: 1,
          projectName: 'Website Toko Online Fashion',
          client: 'PT Fashionista',
          status: 'in-progress',
          deadline: '2025-02-15',
          progress: 75,
          package: 'Business',
        },
        {
          id: 2,
          projectName: 'Landing Page Restaurant',
          client: 'Warung Nusantara',
          status: 'review',
          deadline: '2025-02-10',
          progress: 95,
          package: 'Startup',
        },
        {
          id: 3,
          projectName: 'Company Profile',
          client: 'CV Mandiri Jaya',
          status: 'waiting',
          deadline: '2025-02-20',
          progress: 0,
          package: 'UMKM',
        },
        {
          id: 4,
          projectName: 'E-learning Platform',
          client: 'EduTech Indonesia',
          status: 'in-progress',
          deadline: '2025-02-25',
          progress: 45,
          package: 'Business',
        },
        {
          id: 5,
          projectName: 'Portfolio Website',
          client: 'John Photography',
          status: 'completed',
          deadline: '2025-01-30',
          progress: 100,
          package: 'Startup',
        },
      ];
      setQueues(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'review':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'Waiting';
      case 'in-progress':
        return 'In Progress';
      case 'review':
        return 'Review';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  const filteredQueues = queues.filter(queue => {
    const matchesFilter = filter === 'all' || queue.status === filter;
    const matchesSearch = queue.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         queue.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Project </span>
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Queue Status
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pantau status pengerjaan project Anda secara real-time. 
            Kami berkomitmen untuk memberikan transparansi penuh dalam setiap tahap pengerjaan.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="waiting">Waiting</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Queue Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              <p className="mt-4 text-gray-600">Loading queue data...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Package</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Progress</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredQueues.map((queue) => (
                    <tr key={queue.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{queue.projectName}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{queue.client}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {queue.package}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(queue.status)}`}>
                          {getStatusText(queue.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-red h-2 rounded-full transition-all duration-300"
                              style={{ width: `${queue.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-600">{queue.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{queue.deadline}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {queues.filter(q => q.status === 'waiting').length}
            </div>
            <div className="text-gray-600">Waiting</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {queues.filter(q => q.status === 'in-progress').length}
            </div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {queues.filter(q => q.status === 'review').length}
            </div>
            <div className="text-gray-600">Review</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {queues.filter(q => q.status === 'completed').length}
            </div>
            <div className="text-gray-600">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueuesPage;