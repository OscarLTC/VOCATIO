import './layout.scss';
import Navbar from './navbar/navbar';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout({ children }: any) {
  return (
    <div className="lg:flex items-start justify-between">
      <Navbar />
      <div className="flex flex-col lg:ml-60 w-full pl-0  select-none md:space-y-4 text-center bg-[aliceblue] h-[100vh] m-auto text-[#003552]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
