import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
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
        // console.log(account, 'JWT?');
        // hit backend
        // get the response user
        // set that like the sign-in normal do
        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        //   {
        //     method: 'POST',
        //     headers: {
        //       Authorization: `Bearer ${account?.id_token}`,
        //     },
        //   }
        // );
        // const resParsed = await res.json();
        // token = Object.assign({}, token, {
        //   id_token: account.id_token,
        // });
        // token = Object.assign({}, token, {
        //   myToken: resParsed.authToken,
        // });
        /**
         * TODO: Fix this implementation
         */
        // const detailRes = await fetch(baseURL + '/users/' + loginData.data.user_id, {
        //   method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${loginData.data.token}`,
        //   },
        // });
        // if (!detailRes.ok) {
        //   return errorHandling(detailRes);
        // }
        // const userDetail = await detailRes.json();
        // await setSessions({ ...loginData.data, user_detail: userDetail.data });
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
