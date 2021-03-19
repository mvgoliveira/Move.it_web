// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: "71739218ccf03e39cc9b",
      clientSecret: "b3309fcaf8660d3f95bd10c8e57729d9b9a55504",
    }),
  ]
};

export default (req, res) => NextAuth(req, res, options);