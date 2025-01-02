import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  const maintenanceMode = request.cookies.get('maintenanceMode')?.value === 'true'

  // Allow access to admin panel, static files, and API routes
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api')
  ) {
    return NextResponse.next()
  }

  // Show maintenance page if maintenance mode is enabled
  if (maintenanceMode) {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}

