
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

// Interfaces for our data types
export interface Tasker {
  id: string;
  name: string;
  bio: string | null;
  image: string | null;
  rating: number;
  tasks_completed: number;
  languages: string[];
  years_experience: number;
  whatsapp: string | null;
  city: string;
  created_at: string;
  updated_at: string;
}

export interface TaskerSpecialty {
  id: string;
  tasker_id: string;
  specialty: string;
  description: string | null;
  created_at: string;
}

export interface PortfolioImage {
  id: string;
  tasker_id: string;
  image_url: string;
  title: string | null;
  created_at: string;
}

// Custom hook to fetch a single tasker by ID
export function useTasker(taskerId: string | undefined) {
  return useQuery({
    queryKey: ['tasker', taskerId],
    queryFn: async () => {
      if (!taskerId) return null;
      
      const { data, error } = await supabase
        .from('taskers')
        .select('*')
        .eq('id', taskerId)
        .single();
      
      if (error) {
        console.error('Error fetching tasker:', error);
        throw error;
      }
      
      return data as Tasker;
    },
    enabled: !!taskerId
  });
}

// Custom hook to fetch tasker specialties
export function useTaskerSpecialties(taskerId: string | undefined) {
  return useQuery({
    queryKey: ['taskerSpecialties', taskerId],
    queryFn: async () => {
      if (!taskerId) return [];
      
      const { data, error } = await supabase
        .from('tasker_specialties')
        .select('*')
        .eq('tasker_id', taskerId);
      
      if (error) {
        console.error('Error fetching specialties:', error);
        throw error;
      }
      
      return data as TaskerSpecialty[];
    },
    enabled: !!taskerId
  });
}

// Custom hook to fetch tasker portfolio images
export function useTaskerPortfolio(taskerId: string | undefined) {
  return useQuery({
    queryKey: ['taskerPortfolio', taskerId],
    queryFn: async () => {
      if (!taskerId) return [];
      
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .eq('tasker_id', taskerId);
      
      if (error) {
        console.error('Error fetching portfolio:', error);
        throw error;
      }
      
      return data as PortfolioImage[];
    },
    enabled: !!taskerId
  });
}

// Custom hook to fetch taskers by specialty or city
export function useTaskers(specialty?: string, city?: string) {
  return useQuery({
    queryKey: ['taskers', specialty, city],
    queryFn: async () => {
      let query = supabase.from('taskers').select('*');
      
      if (city) {
        query = query.eq('city', city);
      }
      
      const { data: taskers, error } = await query;
      
      if (error) {
        console.error('Error fetching taskers:', error);
        throw error;
      }
      
      if (!specialty) {
        return taskers as Tasker[];
      }
      
      // If specialty is provided, we need to fetch tasker_specialties and filter
      const { data: specialties, error: specialtiesError } = await supabase
        .from('tasker_specialties')
        .select('*')
        .eq('specialty', specialty);
      
      if (specialtiesError) {
        console.error('Error fetching specialties:', specialtiesError);
        throw specialtiesError;
      }
      
      // Filter taskers by specialties
      const taskerIds = specialties.map(s => s.tasker_id);
      return taskers.filter(tasker => taskerIds.includes(tasker.id)) as Tasker[];
    }
  });
}
