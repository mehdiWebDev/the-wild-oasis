import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://rimsubjcsthlpmlbwruw.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpbXN1Ympjc3RobHBtbGJ3cnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNTE1NjEsImV4cCI6MjA2ODYyNzU2MX0.rUXYzblupG0-oqaiRTXK_H3rquH-IGUwegKpVkzM2Ww";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase