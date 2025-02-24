import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ckyqqoidnjxirucfzyrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreXFxb2lkbmp4aXJ1Y2Z6eXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MTU5MDgsImV4cCI6MjA1NDk5MTkwOH0.0C0gMIYTVz-JysJ7_mtHTPZVjqxqFLjWQCKNbzDoQFU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
