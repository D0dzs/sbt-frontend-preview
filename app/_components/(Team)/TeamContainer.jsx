'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { cn } from '~/lib/utils';
import TeamLeader from './TeamLeader';
import TeamMember from './TeamMember';
import { Separator } from '~/components/ui/separator';

const TeamContainer = ({ group, setRefresh }) => {
  return (
    <div className="relative flex flex-col">
      <Accordion className="**:p-0" type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`${cn('w-fit cursor-default text-xl lg:text-3xl', group.description ? 'cursor-pointer hover:underline' : null)}`}
            visibleChevron={group.description}
          >
            <span className="flex items-center gap-2">{group.name}</span>
          </AccordionTrigger>
          <AccordionContent className="font-thin">{group.description}</AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="py-4 pl-4">
        {!group.SubGroup ? (
          <div className="flex gap-8">
            <TeamLeader
              setRefresh={setRefresh}
              group={group.name}
              leader={group.leader}
              position={group.leader?.GroupRole?.[0]?.position ?? null}
              isItSubGroup={false}
            />
            {group.GroupRole
              ? group.GroupRole.map(({ user, position }, idx) => (
                  <TeamMember
                    setRefresh={setRefresh}
                    group={group.name}
                    key={idx}
                    user={user}
                    position={position ?? null}
                    isItSubGroup={false}
                  />
                ))
              : null}
          </div>
        ) : (
          group.SubGroup.map((group, idx) => {
            return (
              <div key={idx}>
                {idx + 1 >= 2 ? <Separator className="bg-bme-black/50 dark:bg-bme-white/50 my-2 h-px" /> : null}
                <div>
                  <Accordion className="**:p-0" type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={`${cn('w-fit cursor-default text-xl lg:text-3xl', group.description ? 'cursor-pointer hover:underline' : null)}`}
                        visibleChevron={group.description}
                      >
                        <span className="flex items-center gap-2">{group.name}</span>
                      </AccordionTrigger>
                      <AccordionContent className="font-thin">{group.description}</AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-4 flex place-items-center gap-8">
                    <TeamLeader
                      setRefresh={setRefresh}
                      group={group.name}
                      leader={group.leader}
                      position={group.leader.SubGroupRole ?? null}
                      isItSubGroup={true}
                    />
                    {group.SubGroupRole
                      ? group.SubGroupRole.map(({ User, position }, idx) => (
                          <TeamMember
                            setRefresh={setRefresh}
                            group={group.name}
                            key={idx}
                            user={User}
                            position={position}
                            isItSubGroup={true}
                          />
                        ))
                      : null}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TeamContainer;
