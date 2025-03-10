import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) return NextResponse.redirect(new URL('/', request.url));

  try {
    // Properly format the cookie for the request header
    const cookieHeader = `token=${token.value}`;

    const response = await fetch(`${process.env.API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieHeader,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch user');

    const { user } = await response.json();
    if (!user) return NextResponse.redirect(new URL('/', request.url));

    const isAdministrator = user.role.toLowerCase() === 'admin';
    if (!isAdministrator) return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
