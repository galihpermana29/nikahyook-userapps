import { type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session')?.value;
  if (!currentUser && request.nextUrl.pathname !== '/login') {
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
