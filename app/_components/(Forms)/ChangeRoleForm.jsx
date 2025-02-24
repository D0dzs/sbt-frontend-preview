'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

const ChangeRoleForm = ({ role }) => {
  return (
    <Select>
      <SelectTrigger className="max-w-36 text-center capitalize">{role}</SelectTrigger>
      <SelectContent>
        <SelectItem value="admin" disabled={role === 'admin'}>
          Admin
        </SelectItem>
        <SelectItem value="writer" disabled={role === 'writer'}>
          Writer
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChangeRoleForm;
