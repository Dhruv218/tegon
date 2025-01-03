import { ScrollArea } from '@tegonhq/ui/components/scroll-area';
import { observer } from 'mobx-react-lite';

import { usePriorities } from 'hooks/priorities';

import { PriorityViewList } from './priority-view-list';

export const PriorityList = observer(() => {
  const Priorities = usePriorities();

  return (
    <ScrollArea className="w-full h-full" id="priority-list">
      <div className="flex flex-col gap-4 h-full pb-[100px]">
        {Priorities.map((priority: string, index: number) => (
          <PriorityViewList key={priority} priority={index} />
        ))}
      </div>
    </ScrollArea>
  );
});
