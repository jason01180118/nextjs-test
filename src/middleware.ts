import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (token) {
        return true;
      }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = { matcher: ['/ssgpaths'] };
