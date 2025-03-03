'use client';

const TeamLeader = ({ user }) => {
  return (
    <div className="mb-2 flex flex-col items-center justify-center gap-2">
      <div className="relative p-2">
        <img src="/images/team/Leader 1.jpg" alt="Leader 1" className="h-20 w-20 lg:h-28 lg:w-28 rounded-full object-cover" />
        <div className="dark:outline-bme-orange outline-bme-blue absolute top-0 left-0 h-full w-full rounded-full bg-transparent outline-2" />
      </div>
      <h2 className="text-lg font-bold">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm opacity-50">{user.position}</p>
    </div>
  );
};

export default TeamLeader;
