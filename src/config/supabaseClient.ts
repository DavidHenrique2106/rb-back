import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uidmiknkbugssuvaixjd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZG1pa25rYnVnc3N1dmFpeGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODUwNTcsImV4cCI6MjA0OTc2MTA1N30.dUz_j9cSdf4hz0YaSCc4FUT_lh3LJLRhwMO5ndjzvWc';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
