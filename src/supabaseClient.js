import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kosqeqfflbttxboxehev.supabase.co';
const SUPABASE_PUBLIC_KEY = 'sb_publishable_KS0sSu-Mc3uU4rQTo9JDXQ__fPRyYJm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
