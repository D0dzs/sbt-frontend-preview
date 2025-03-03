'use client';

const TeamMember = ({ user, position }) => {
  return (
    <div className="mb-2 flex flex-col items-center justify-center gap-2">
      <img
        src="/images/team/Leader 2.jpg"
        alt={user.firstName + ' ' + user.lastName}
        className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
      />
      <h2 className="text-lg font-bold">
        {user.firstName} {user.lastName}
      </h2>
      {position ? <p className="text-sm opacity-50">{position}</p> : null}
    </div>
  );
};

export default TeamMember;
