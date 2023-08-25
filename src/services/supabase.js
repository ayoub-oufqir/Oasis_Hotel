import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uvnzgcadtytrdlgiahcf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bnpnY2FkdHl0cmRsZ2lhaGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MTU2NDIsImV4cCI6MjAwODI5MTY0Mn0.qIEjkmt9IkpGfS9oRMlT5T-wqc6nJtFELj4ho4ow5Tk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
