// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfcdbmththsabosvvbra.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmY2RibXRodGhzYWJvc3Z2YnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTczNzksImV4cCI6MjA2Mjk5MzM3OX0.5xtz7euee6rh3IXLWwwcYvTsAwvonvlKC3VItYZqtW0';
export const supabase = createClient(supabaseUrl, supabaseKey);