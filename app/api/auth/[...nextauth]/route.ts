import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { Adapter } from "next-auth/adapters"
import jwt from "jsonwebtoken"
import  CredentialsProvider  from "next-auth/providers/credentials"

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/configuration/auth-config
export default NextAuth({
  // https://authjs.dev/reference/providers/oauth-builtin
  adapter: SupabaseAdapter({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    }) as Adapter,
  providers: [
    

  ],
  callbacks: {
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        }
        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
      }
      return session
    },
  }
  // ...
})