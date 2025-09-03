/*
  # Create Admin Dashboard Tables

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `package` (text)
      - `full_name` (text)
      - `whatsapp` (text)
      - `company_name` (text)
      - `business_type` (text)
      - `project_details` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `projects`
      - `id` (uuid, primary key)
      - `project_name` (text)
      - `client_name` (text)
      - `deadline` (date)
      - `status` (text)
      - `progress` (integer)
      - `order_id` (uuid, foreign key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package text NOT NULL,
  full_name text NOT NULL,
  whatsapp text NOT NULL,
  company_name text,
  business_type text,
  project_details text,
  status text DEFAULT 'waiting' CHECK (status IN ('waiting', 'in-progress', 'review', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name text NOT NULL,
  client_name text NOT NULL,
  deadline date,
  status text DEFAULT 'waiting' CHECK (status IN ('waiting', 'in-progress', 'review', 'completed')),
  progress integer DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  order_id uuid REFERENCES orders(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Authenticated users can read orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete orders"
  ON orders
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read projects"
  ON projects
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO orders (package, full_name, whatsapp, company_name, business_type, project_details, status) VALUES
('Business', 'John Doe', '628123456789', 'PT Fashionista', 'E-commerce', 'Website toko online fashion dengan sistem inventory', 'in-progress'),
('Startup', 'Jane Smith', '628987654321', 'Warung Nusantara', 'Food & Beverage', 'Landing page restaurant dengan sistem reservasi', 'review'),
('UMKM', 'Ahmad Rahman', '628555666777', 'CV Mandiri Jaya', 'Manufacturing', 'Company profile sederhana', 'waiting'),
('Business', 'Sarah Wilson', '628444333222', 'EduTech Indonesia', 'Education', 'E-learning platform dengan video streaming', 'in-progress'),
('Startup', 'Mike Johnson', '628111222333', 'John Photography', 'Creative', 'Portfolio website untuk fotografer', 'completed');

INSERT INTO projects (project_name, client_name, deadline, status, progress, order_id) VALUES
('Website Toko Online Fashion', 'PT Fashionista', '2025-02-15', 'in-progress', 75, (SELECT id FROM orders WHERE company_name = 'PT Fashionista')),
('Landing Page Restaurant', 'Warung Nusantara', '2025-02-10', 'review', 95, (SELECT id FROM orders WHERE company_name = 'Warung Nusantara')),
('Company Profile', 'CV Mandiri Jaya', '2025-02-20', 'waiting', 0, (SELECT id FROM orders WHERE company_name = 'CV Mandiri Jaya')),
('E-learning Platform', 'EduTech Indonesia', '2025-02-25', 'in-progress', 45, (SELECT id FROM orders WHERE company_name = 'EduTech Indonesia')),
('Portfolio Website', 'John Photography', '2025-01-30', 'completed', 100, (SELECT id FROM orders WHERE company_name = 'John Photography'));