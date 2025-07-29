import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, host } = request.nextUrl
  
  // Redirect non-www to www
  if (host === 'av.school') {
    const url = request.nextUrl.clone()
    url.host = 'www.av.school'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 