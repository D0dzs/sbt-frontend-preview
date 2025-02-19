import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isAdmin(user) {
  return user?.UserRole[0].role.name.toLowerCase() === 'admin';
}
