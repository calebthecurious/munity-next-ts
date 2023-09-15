import { withAuth } from "next-auth/middleware";

// This is the default export for the middleware
export default withAuth({
  pages: {
    signIn: "/",
  },
});

// This is the configuration for the middleware
export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites",
    "/users/:path*",
  ],
};
