import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';

export const authOptions = {
    providers: [
        GoogleProvider({
            name: 'Google',
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
        signOut: '/'
    },
    secret: process.env.JWT_SECRET!,
}
export default NextAuth(authOptions)