import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Dispatch, SetStateAction } from 'react';

type TMobileSidebarProps = {
  className?: string;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
};
export default function MobileSidebar({
  setSidebarOpen,
  sidebarOpen
}: TMobileSidebarProps) {
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="bg-dark !px-0 border-none">
        </SheetContent>
      </Sheet>
    </>
  );
}
