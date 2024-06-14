import { ScrollArea } from '../ui/scroll-area';
import LiveChat from './live-chat';

export default function Sidebar() {

  return (
    <ScrollArea>
      <aside className="hidden h-[calc(100vh-82px)] flex-col items-center gap-2 justify-between overflow-y-auto overflow-x-hidden bg-dark bg-opacity-70 bg-blend-multiply xl:flex">
        <LiveChat />
      </aside>
    </ScrollArea>
  );
}
