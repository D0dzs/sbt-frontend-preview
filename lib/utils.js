import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isAdmin(user) {
  return user?.UserRole[0].role.name.toLowerCase();
}

let isRefreshing = false;
let failedRequests = [];

export const fetchWithAuth = async (input, init = {}) => {
  const requestClone = init.body ? { ...init, body: init.body } : init;
  let response = await fetch(input, {
    ...init,
    credentials: 'include',
  });

  if (response.status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const refreshTokens = await fetch('/api/auth/refresh', {
          method: 'POST',
          credentials: 'include',
        });

        if (!refreshTokens.ok) throw new Error('Failed to refresh tokens');

        response = await fetch(input, requestClone);

        failedRequests.forEach((promise) => promise.resolve());
        failedRequests = [];
      } catch (error) {
        window.location.href = '/login';
        failedRequests.forEach((promise) => promise.reject(error));
        failedRequests = [];
        throw error;
      } finally {
        isRefreshing = false;
      }
    }
  } else {
    return new Promise((resolve, reject) => {
      failedRequests.push({
        resolve: () => {
          fetchWithAuth(input, requestClone).then(resolve).catch(reject);
        },
      });
    });
  }

  return response;
};
