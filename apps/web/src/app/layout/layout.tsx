import './layout.scss';
import Navbar from './navbar/navbar';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout({ children }: any) {
  return (
    <div className="flex items-start justify-between">
      <Navbar />
      <div className="flex flex-col ml-80 w-full pl-0 md:p-4 md:space-y-4 text-center bg-[aliceblue] h-[100vh] m-auto text-[#003552]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
