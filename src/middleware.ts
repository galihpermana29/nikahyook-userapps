import { type NextRequest } from 'next/server';
import getBaseUrl from './shared/usecase/getBaseUrl';

const authPaths = ['/login', '/forgot-password', '/register'];
const forgotPassChildren = ['/forgot-password/otp-verification'];

export function middleware(request: NextRequest) {
  const baseUrl = getBaseUrl();
  const currentUser = request.cookies.get('session')?.value;
  const refererHeader = request.headers.get('referer');

  // removes base url
  const referer = refererHeader?.replace(baseUrl, '');
  const pathname = request.nextUrl.pathname.replace(baseUrl, '');

  // guard forgot password child path
  // so that it can only be accessed from '/forgot-password'
  if (
    forgotPassChildren.includes(pathname) &&
    !referer?.endsWith('/forgot-password')
  ) {
    return Response.redirect(new URL('/', request.url));
  }

  // whenever user is not logged in and tries to access paths other than authPaths
  // redirect to login
  if (!currentUser && !authPaths.includes(pathname)) {
    return Response.redirect(new URL('/login', request.url));
  }

  // handles the case where user is already logged in
  // and tries to access one of auth paths
  if (currentUser && authPaths.includes(pathname)) {
    if (referer) {
      const isFromAuthPaths = authPaths.includes(referer);

      // prevents too many redirect errors
      // can happen when user failed to login/register or something else
      // whenever user is in authPaths
      const redirectPath = isFromAuthPaths ? '/' : referer;

      return Response.redirect(new URL(redirectPath, request.url));
    }

    return Response.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
