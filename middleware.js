import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch user');

    const { user } = await response.json();
    if (!user) return NextResponse.redirect(new URL('/', request.url));

    const isAdministrator = user.role === 'admin';
    if (!isAdministrator) return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
