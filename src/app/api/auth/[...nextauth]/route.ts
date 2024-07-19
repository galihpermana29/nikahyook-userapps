import {
  getDetailForLoginCookies,
  loginOauth,
} from '@/shared/actions/userService';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          id_token: token.id_token,
        });
        session = Object.assign({}, session, {
          authToken: token.myToken,
        });
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const { id_token } = account;
        const oAuthResult = await loginOauth({ token_email: id_token! });
        if (typeof oAuthResult.data !== 'string') {
          if (oAuthResult.data.is_registered) {
            await getDetailForLoginCookies(
              oAuthResult.data.user_id,
              oAuthResult.data.token,
              oAuthResult.data
            );
          } else {
            cookies().set(
              'oAuthStatus',
              JSON.stringify({ ...(oAuthResult.data as object), ...token }),
              {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // One week
                path: '/',
              }
            );
          }
        }
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
