import Sidebar from '../shared/sidebar';
import Header from '../shared/header';
import WeaponLists from '../shared/lists';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex w-full flex-row">
        <div className='flex flex-col w-2/12'>
          <div className='absolute left-0 top-0 -z-10 h-full w-full bg-dark-black' />
          <Sidebar />
        </div>
        <div className="relative z-10 flex h-16 flex-shrink-0 shadow">
        </div>
        <div className="flex flex-row focus:outline-none w-full">
          <div className='w-10/12 h-[80vh]'>{children}</div>
          <WeaponLists />
        </div>
      </div>
    </div>
  );
}
