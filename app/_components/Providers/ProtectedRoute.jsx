'use client';

import { useContext, useMemo } from 'react';
import { UserContext } from './User-provider';
import { useRouter } from 'next/navigation';
import { isAdmin } from '~/lib/utils';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const priviledge = useMemo(() => isAdmin(user), [user]);
  if (!user || !priviledge) return router.push('/login');

  return children;
};

export default ProtectedRoute;
