'use client';

const TeamLeader = ({ leader, position }) => {
  const { firstName, lastName } = leader;

  return (
    <div className="mb-2 flex flex-col items-center justify-center gap-2">
      <div className="relative p-2">
        {/* eslint-disable-next-line */}
        <img
          src={leader.avatarURL ?? '/images/team/Leader 1.jpg'}
          alt="Leader 1"
          className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
        />
        <div className="dark:outline-bme-orange outline-bme-blue absolute top-0 left-0 h-full w-full rounded-full bg-transparent outline-2" />
      </div>
      <h2 className="text-lg font-bold">
        {firstName} {lastName}
      </h2>
      {position ? <p className="text-sm opacity-50">{position}</p> : null}
    </div>
  );
};

export default TeamLeader;
