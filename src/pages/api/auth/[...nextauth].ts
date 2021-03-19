// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: "71739218ccf03e39cc9b",
      clientSecret: "d8423b76ebd5df3d568ef2380aa87cdbff92dc72",
    }),
  ]
};

export default (req, res) => NextAuth(req, res, options);