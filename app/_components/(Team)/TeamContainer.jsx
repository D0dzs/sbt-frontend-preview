'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import TeamLeader from './TeamLeader';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const templateuser = {
  firstName: 'Team',
  lastName: 'Name',
  position: 'Leader',
};

const TeamContainer = ({ users, title, description }) => {
  const [accordionState, setAccordionState] = useState({ item1: true });
  return (
    <div className="flex flex-col gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="w-fit cursor-pointer text-xl lg:text-3xl"
            onClick={() => {
              setAccordionState((prev) => ({ ...prev, item1: !prev.item1 }));
            }}
          >
            <span className="flex items-center gap-2">
              {title}
              <ChevronDown className={`${accordionState.item1 ? '' : 'rotate-180'} text-muted-foreground`} />
            </span>
          </AccordionTrigger>
          <AccordionContent className="font-thin">{description}</AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="p-4">
        <div className="flex *:min-w-28 lg:gap-8">
          <TeamLeader user={templateuser} />
          <div className="mb-2 flex flex-col items-center justify-center gap-2">
            <img
              src="/images/team/Leader 2.jpg"
              alt="Leader 2"
              className="h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h2 className="text-lg font-bold">Leader 2</h2>
            <p className="text-sm opacity-50">Position</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContainer;
