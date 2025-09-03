const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data for queues
const mockQueues = [
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

// Routes
app.get('/api/queues', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json({
      success: true,
      data: mockQueues
    });
  }, 1000);
});

app.get('/api/queues/:id', (req, res) => {
  const queueId = parseInt(req.params.id);
  const queue = mockQueues.find(q => q.id === queueId);
  
  if (queue) {
    res.json({
      success: true,
      data: queue
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Queue not found'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'SynaWorks API'
  });
});

app.listen(port, () => {
  console.log(`🚀 SynaWorks API Server running on port ${port}`);
});