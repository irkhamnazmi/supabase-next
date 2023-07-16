'use client'
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from '@supabase/supabase-js'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Link from "next/link";

export default function login() {
  const Container = (props :any) => {
    const { user } = Auth.useUser()
    console.log(user);

    
    async function signOut() {
      
      const { error } = await supabase.auth.signOut();
    }
    
  if (user)
    return (
             <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <div className="columns-xs text-center">
            <h1>{ user.email}</h1>
        <button onClick={signOut} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer">
        <h2 className={`text-2xl font-semibold`}>
          Logout
        </h2>
          </button>
      </div>
          </main>
    )
  return props.children
}
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ??'',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?? '');
  return (
    <div className="container mx-auto mt-32 px-10 px-auto">
      <Auth.UserContextProvider supabaseClient={supabase}
      
    
      >
        <Container  supabaseClient={supabase}>
          <Auth supabaseClient={supabase} theme="dark"
        appearance={{ theme: ThemeSupa }}
    providers={[]}/>
        </Container>

    </Auth.UserContextProvider>
    </div>
    
      
    
  )
}
