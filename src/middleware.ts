import { NextResponse, type NextRequest } from 'next/server';
import getBaseUrl from './shared/usecase/getBaseUrl';
import { validateResetToken } from './shared/actions/userService';

const authPaths = [
  '/login',
  '/forgot-password',
  '/register',
  '/forgot-password/reset',
];

const isAuthPath = (path: string | undefined) => authPaths.includes(path ?? '');

export async function middleware(request: NextRequest) {
  const baseUrl = getBaseUrl();
  const currentUser = request.cookies.get('session')?.value;
  const refererHeader = request.headers.get('referer');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  // removes base url
  const referer = refererHeader?.replace(baseUrl, '').split('?')[0];
  const pathname = request.nextUrl.pathname.replace(baseUrl, '').split('?')[0];
  const searchParams = request.nextUrl.searchParams;

  if (pathname === '/')
    return NextResponse.redirect(new URL('/discover', request.url));

  // handle unauthenticated user access:
  //   - redirect to login if not on an authorized path.
  //   - if on '/forgot-password/reset' with no token, redirect to '/forgot-password'.
  //   - if on '/forgot-password' with a valid token, redirect to '/forgot-password/reset'.
  if (!currentUser) {
    if (!isAuthPath(pathname)) {
      return Response.redirect(new URL('/login', request.url));
    }

    if (pathname === '/forgot-password/reset') {
      const token = searchParams.get('token');

      if (!token)
        return NextResponse.redirect(new URL('/forgot-password', request.url));
    }

    if (pathname === '/forgot-password') {
      const token = searchParams.get('token');
      const isTokenValid = await validateResetToken(token ?? '');

      if (isTokenValid.success) {
        return NextResponse.redirect(
          new URL(`/forgot-password/reset?token=${token}`, request.url)
        );
      }
    }
  }

  // handles the case where user is already logged in
  // and tries to access one of auth paths
  if (currentUser && isAuthPath(pathname)) {
    if (isAuthPath(referer)) {
      return Response.redirect(new URL('/', request.url));
    }

    const redirectPath = referer ?? '/';
    return Response.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
