'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { wait } from '~/lib/utils';

const ChangeRoleForm = ({ user, fetchUsers }) => {
  const [role, setRole] = useState(user.role);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRoleChange = async (newRole) => {
    if (newRole === role) return;

    setIsSubmitting(true);
    const requestBody = { email: user.email, newRole };

    try {
      const response = await fetch(`${process.env.API_URL}/users/change-role`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const ctx = await response.json();
        toast.error(ctx.message);
        console.error(ctx);
      } else {
        const ctx = await response.json();
        toast.success(ctx.message);
        setRole(newRole);
        wait().then(() => {
          if (fetchUsers) fetchUsers();
        });
      }
    } catch (error) {
      toast.error('An error occurred while changing role');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Select value={role} onValueChange={handleRoleChange} disabled={isSubmitting}>
      <SelectTrigger className="max-w-36 text-center capitalize">
        <SelectValue placeholder={role} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin" disabled={user.role === 'admin'}>
          Admin
        </SelectItem>
        <SelectItem value="writer" disabled={user.role === 'writer'}>
          Writer
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChangeRoleForm;
