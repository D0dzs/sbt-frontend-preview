import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isAdmin(user) {
  if (!user) return null;

  const role = user.UserRole[0].role.name;
  return role.toLowerCase() === 'admin';
}
