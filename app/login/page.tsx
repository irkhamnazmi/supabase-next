'use client'
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from '@supabase/supabase-js'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function login() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  return (
    <div className="container mx-auto mt-32 px-96">
      <Auth supabaseClient={supabase}
       theme="dark"
        appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
    
    />
    </div>
    
      
    
  )
}
