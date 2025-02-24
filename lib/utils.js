import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isAdmin(user) {
  // TODO: remove tolowercase()
  const role = user?.UserRole[0]?.role?.name?.toLowerCase() || null;
  return role === 'admin';
}

export const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
