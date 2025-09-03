import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import QueuesPage from './pages/QueuesPage';
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import OrdersPage from './pages/admin/OrdersPage';
import ProjectsPage from './pages/admin/ProjectsPage';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAdmin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary font-poppins flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-primary font-poppins">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/queues" element={<QueuesPage />} />
          
          {/* Admin Routes */}
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
          <Route path="/orders" element={<AdminLayout />}>
            <Route index element={<OrdersPage />} />
          </Route>
          <Route path="/projects" element={<AdminLayout />}>
            <Route index element={<ProjectsPage />} />
          </Route>
        </Routes>
        
        {/* Only show navbar and footer for public routes */}
        <Routes>
          <Route path="/" element={<><Navbar /><Footer /></>} />
          <Route path="/portfolio" element={<><Navbar /><Footer /></>} />
          <Route path="/queues" element={<><Navbar /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;