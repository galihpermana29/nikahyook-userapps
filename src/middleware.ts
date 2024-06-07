import { type NextRequest } from 'next/server';

const authPaths = [
  '/login',
  '/forgot-password',
  '/register',
  '/otp-verification',
  '/register/create-profile',
];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value;

  if (!currentUser && !authPaths.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL('/login', request.url));
  }

  if (currentUser && request.nextUrl.pathname === '/login') {
    const previousUrl = request.headers.get('referer') || '/';
    return Response.redirect(new URL(previousUrl, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
