import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites",
    "/((?!.*..*|_next.*))",
    "/",
    "/(api|trpc)(.*)",
  ],
};
