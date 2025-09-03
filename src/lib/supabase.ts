import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Order = {
  id: string;
  package: string;
  full_name: string;
  whatsapp: string;
  company_name: string;
  business_type: string;
  project_details: string;
  status: 'waiting' | 'in-progress' | 'review' | 'completed';
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  project_name: string;
  client_name: string;
  deadline: string;
  status: 'waiting' | 'in-progress' | 'review' | 'completed';
  progress: number;
  order_id: string | null;
  created_at: string;
  updated_at: string;
};