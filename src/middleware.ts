// See https://clerk.com/docs/references/nextjs/auth-middleware

import {authMiddleware} from "@clerk/nextjs/server";

// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ["/"],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
