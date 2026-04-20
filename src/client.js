import { createClient } from '@supabase/supabase-js'

const URL = 'https://ufcfkpkkyapscmnoisrl.supabase.co'
const API_KEY = 'sb_publishable_ppdLkYlfgv8SveN9cFPjIw_UoEh4cth'

export const supabase = createClient(URL, API_KEY)