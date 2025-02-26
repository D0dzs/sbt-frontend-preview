import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  try {
    const response = await fetch(`${process.env.API_URL}/auth/me`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        cookie: `token=${token}`,
      },
    });

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
