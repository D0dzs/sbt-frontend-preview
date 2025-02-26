import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isAdmin(user) {
  const role = user?.role || null;
  return role === 'admin';
}

export const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
