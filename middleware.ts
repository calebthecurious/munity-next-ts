<<<<<<< HEAD
import { withAuth } from "next-auth/middleware";
=======
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
>>>>>>> 53845c62a166e6eb8f3f5fbf52e20309341dd241

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
<<<<<<< HEAD
    "/users/:path*",
=======
    "/((?!.*..*|_next.*))",
    "/",
    "/(api|trpc)(.*)",
>>>>>>> 53845c62a166e6eb8f3f5fbf52e20309341dd241
  ],
};
